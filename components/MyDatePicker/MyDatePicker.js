import React from "react";
import { Container, Content, DatePicker } from "native-base";
import moment from "moment";

const MyDatePicker = (props) => {

  const setDate = (newDate) => {
    let splitDate = newDate.toLocaleDateString();
    let formattedNewDate = formatDates(splitDate);
    props.setFilteredDate(formattedNewDate);
  };

  const formatDates = (date) => {
    let dateArray = date.split("/");
    let month = dateArray[0];
    let day = dateArray[1];
    let year = dateArray[2];
    if (month <= 9 && day <= 9) {
      let dateFormat = `0${month}/0${day}/${year}`;
      return dateFormat;
    } else if (month <= 9) {
      let dateFormat = `0${month}/${day}/${year}`;
      return dateFormat;
    } else if (day <= 9) {
      let dateFormat = `${month}/0${day}/${year}`;
      return dateFormat;
    } else {
      return date;
    }
  };

  return (
    <Container style={{ borderWidth: 3, borderRadius: "20%", width: "80%" }}>
      <Content>
        <DatePicker
          formatChosenDate={(date) => {
            return moment(date).format("MM/DD/YYYY");
          }}
          defaultDate={new Date()}
          minimumDate={new Date(2020, 1, 1)}
          maximumDate={new Date(2021, 1, 1)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          placeHolderText={
            props.filteredDate ? props.filteredDate : "Select date"
          }
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#38A3A5" }}
          onDateChange={setDate}
          disabled={false}
        />
      </Content>
    </Container>
  );
};

export default MyDatePicker;
