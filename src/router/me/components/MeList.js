import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardLinkIcon } from '../../../components/common';
import {
  ADDRESS,
  PRODUCT,
  CHANNEL_PAYMENT,
  PLACE,
  SUBPLACE,
  CONTACT,
  QUESTION,
  ABOUT_ITTP,
  LOGOUT
} from '../../../texts';

class MeList extends Component {
  onPressContact() {
    Actions.contact();
  }
  onPressPlace() {
    Actions.place();
  }
  onPressSubPlace() {
    Actions.subplace();
  }
  onPressQuestion() {
    Actions.question();
  }
  onPressProduct() {
    Actions.product();
  }
  onPressChannel() {
    Actions.channel();
  }
  onPressAddress() {
    Actions.address();
  }
  async onPressLogOut() {
    this.props.submitLogout();
    try {
      Promise.all(
        AsyncStorage.getAllKeys()
          .then(ks => ks.map(
            async k => await AsyncStorage.removeItem(k).then(() => {
              Actions.login();
            }))
          )
      );
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
    }
  }
  render() {
    const list1 = [
      {
        title: ADDRESS,
        icon: 'location-on',
        onPress: this.onPressAddress
      },
      {
        title: PRODUCT,
        icon: 'account-balance',
        onPress: this.onPressProduct
      },
      {
        title: CHANNEL_PAYMENT,
        icon: 'payment',
        onPress: this.onPressChannel
      },
    ];
    const list2 = [
      {
        title: PLACE,
        icon: 'home',
        onPress: this.onPressPlace
      },
      {
        title: SUBPLACE,
        icon: 'record-voice-over',
        onPress: this.onPressSubPlace
      },
      {
        title: CONTACT,
        icon: 'message',
        onPress: this.onPressContact
      },
    ];
    const list3 = [
      {
        title: QUESTION,
        icon: 'lightbulb-outline',
        onPress: this.onPressQuestion
      },
      {
        title: ABOUT_ITTP,
        icon: 'school'
      },
      {
        title: LOGOUT,
        icon: 'undo',
        onPress: this.onPressLogOut.bind(this)
      },
    ];
    return (
      <View style={styles.container}>
        <CardLinkIcon list={list1} />
        <CardLinkIcon list={list2} />
        <CardLinkIcon list={list3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6eaed',
    width: '100%',
    paddingBottom: 25,
  },
});

export default MeList;
