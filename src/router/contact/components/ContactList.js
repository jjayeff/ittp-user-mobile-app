import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import { CardLinkIcon } from '../../../components/common';
import {
  LINE,
  PHONE_CONTACT,
  FACEBOOK,
  WEBSITE,
  PRIVACY,
  CONDITION_SERVICE,
} from '../../../texts';

class ContactList extends Component {
  onPressPhone() {
    Communications.phonecall('021539580', true);
  }
  onPressFacebook() {
    Communications.web('https://www.facebook.com/ittpLending/');
  }
  onPressLine() {
    Communications.web('https://line.me/R/ti/p/%40ittp');
  }
  onPressWebpage() {
    Communications.web('http://www.ittp.co.th/');
  }
  onPressPrivacy() {
    Actions.privacy();
  }
  render() {
    const list1 = [
      {
        title: PHONE_CONTACT,
        icon: 'phone',
        onPress: this.onPressPhone,
        rightTitle: '02-153-9580',
      },
      {
        title: LINE,
        icon: 'line',
        onPress: this.onPressLine,
        rightTitle: '@ittp',
      },
      {
        title: FACEBOOK,
        icon: 'facebook',
        onPress: this.onPressFacebook
      },
      {
        title: WEBSITE,
        icon: 'web',
        onPress: this.onPressWebpage
      },
    ];
    const list2 = [
      {
        title: CONDITION_SERVICE,
        icon: 'error-outline',
        onPress: this.onPressInfo
      },
      {
        title: PRIVACY,
        icon: 'lock-outline',
        onPress: this.onPressPrivacy
      },
    ];
    return (
      <ScrollView>
        <View style={styles.container}>
          <CardLinkIcon list={list1} />
          <CardLinkIcon list={list2} />
        </View>
      </ScrollView>
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

export default ContactList;
