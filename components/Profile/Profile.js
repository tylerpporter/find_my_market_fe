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

// VECTOR ICONS
import { Ionicons } from "@expo/vector-icons";

// fetch call
import { updateProfileImage } from "../../apiCalls";

// COMPONENTS
import ProfileImage from "../ProfileImage/ProfileImage"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
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
      <ProfileImage
        handlePickAvatar={handlePickAvatar}
        profileAddBtn={profileAddBtn}
        profileAvatar={profileAvatar}
      />

      <ProfileInfo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        profileUser={profileUser}
      />

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
  profileBackground: {
    backgroundColor: "#38A3A5",
    height: "100%",
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
