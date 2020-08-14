// // IMPORTS // //
// React && React-Native
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserPermissions from "../../utilities/UserPermissions";
import { useForm, Controller } from "react-hook-form";

// VECTOR ICONS
import { Ionicons } from "@expo/vector-icons";

// fetch call
import { updateProfileImage } from "../../apiCalls";

// COMPONENTS
import FavMarketList from "../FavMarketList/FavMarketList";
import ProfileUpdateModal from "../Modals/ProfileUpdateModal"
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = (props) => {
  //this is the hook for setting of the avatar image on the profile page
  const [profileAvatar, setProfileAvatar] = useState(props.route.params.avatar);
  //this is the hook for the setting of the add button icon for the profile page image
  const [profileAddBtn, setProfileAddBtn] = useState(props.route.params.addBtn);
  // this is for the Modal to update user information
  const [modalVisible, setModalVisible] = useState(false);
  // This is the hook for updating the user profile
  const [profileUser, setProfileUser] = useState(props.route.params.user);
  //this will determine if the user have favorites to display in listView
  const [listView, setListView] = useState(() => {
    if (!props.route.params.listMarketArray.length) {
      return false
    }else {
      return true
    }
  });

  // This is the method to choose a user image
  const handlePickAvatar = async () => {
    const setUser = props.route.params.setUser;

    UserPermissions.getCameraPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    setProfileAddBtn(false);
    props.route.params.setAddBtn(false);

    if (!result.cancelled) {
      let image = result.uri;
      updateProfileImage(profileUser, setUser, image);
      setProfileAvatar(result.uri);
      props.route.params.setAvatar(result.uri);
    }
  };

  const favoriteMarketList = props.route.params.listMarketArray.map((favMarket) => {
      return (
      <FavMarketList favMarket={favMarket} />
      )
  });
    

  return (
    <View style={styles.profileBackground}>
      <View style={styles.avatarView}>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={handlePickAvatar}
        >
          <Image source={{ uri: profileAvatar }} style={styles.avatar} />
          {profileAddBtn && <Ionicons name="ios-add" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfoView}>
        <View style={styles.profileInfoView}>
          <Text style={styles.profileInfo}>Username:</Text>
          <Text style={styles.profileInfo}>{profileUser.username}</Text>
          <Text style={styles.profileInfo}>Email:</Text>
          <Text style={styles.profileInfo}>{profileUser.email}</Text>
        </View>

        <TouchableOpacity style={styles.updateInfoButton}>
          <Button
            color="black"
            title="Update your information"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </TouchableOpacity>
      </View>

      {listView ? 
      <SafeAreaView style={{ flex: 1, marginBottom: 30, padding: -30 }}>
        <Text style={styles.favoritesHeader}>Favorite Markets</Text>
        <ScrollView style={styles.listViewContainer}>
            {favoriteMarketList}
        </ScrollView>
      </SafeAreaView>
      :
      <SafeAreaView style={{ flex: 1, marginBottom: 30, padding: -30 }}>
        <Text style={styles.favoritesHeader}>Favorite Markets</Text>
        <View style={styles.listViewContainerError}>
          <Text style={{padding: 20, fontWeight: "600"}}> Let's create some Favorite Markets</Text>
        </View>
      </SafeAreaView>
      }

      <ProfileUpdateModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setProfileUser={setProfileUser}
        profileUser={profileUser}
        props={props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  avatarView: {
    alignSelf: "center",
  },
  profileInfo: {
    padding: 6,
    fontSize: 16,
  },
  header: {
    fontSize: 16,
  },
  profileEmailInput: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  profileUsernameInput: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 4,
    height: 60,
    marginHorizontal: 10,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  label: {
    color: "black",
    margin: 10,
    marginHorizontal: 10,
    fontSize: 25,
    alignSelf: "flex-start",
  },
  registerOpenButton: {
    alignSelf: "center",
    backgroundColor: "#38A3A5",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 30,
    marginLeft: 20,
    width: "100%",
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
    paddingTop: 10,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
  },
  profileModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "50%",
    width: "80%",
    marginTop: "50%",
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  profileBackground: {
    backgroundColor: "#38A3A5",
    height: "100%",
  },
  profileInfoView: {
    backgroundColor: "#E1E2E6",
    marginTop: "2%",
    width: "80%",
    alignSelf: "center",
    height: "25%",
    borderRadius: 5,
  },
  updateInfoButton: {
    backgroundColor: "#EF8275",
    borderRadius: 4,
    color: "white",
    height: 40,
    marginTop: 90,
    width: "70%",
    alignSelf: "center",
  },
  favoritesHeader: {
    alignSelf: "center",
    marginTop: 0,
    padding: 0,
    fontSize: 18,
    fontWeight: "800",
  },
  listViewContainer: {
    backgroundColor: "#E1E2E6",
    width: "80%",
    alignSelf: "center",
    height: 400,
    borderRadius: 5,
  },
  listViewContainerError: {
    backgroundColor: "#E1E2E6",
    width: "80%",
    alignSelf: "center",
    height: 70,
    borderRadius: 5,
    alignItems: "center"
  },
});

export default Profile;
