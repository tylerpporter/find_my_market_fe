import React, { Component } from 'react';
import { Container, Content, DatePicker, Text } from 'native-base';

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date().toLocaleDateString()};
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    let splitDate = newDate.toLocaleDateString()
    let formattedNewDate = this.formatDates(splitDate)
    this.setState({ chosenDate: formattedNewDate }, () => {
      this.props.setFilteredDate(this.state.chosenDate)
    });
  }

  formatDates(date) {
    let dateArray = date.split('/');
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
      return date
    }
  }

  render() {
    return (
      <Container style={{borderWidth: 3, borderRadius: "20%", width: "80%"}}>
        <Content>
          <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2020, 1, 1)}
            maximumDate={new Date(2021, 1, 1)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#38A3A5" }}
            onDateChange={this.setDate}
            disabled={false}
            />
        </Content>
      </Container>
    );
  }
}

export default MyDatePicker