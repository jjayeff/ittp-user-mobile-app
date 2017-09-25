import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import { CardLinkIcon } from '../../../components/common';

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
  onPressWedpage() {
    Communications.web('http://www.ittp.co.th/');
  }
  render() {
    const list1 = [
      {
        title: 'ศูนย์บริการลูกค้า',
        icon: 'phone',
        onPress: this.onPressPhone,
        rightTitle: '02-153-9580',
      },
      {
        title: 'ไลน์',
        icon: 'line',
        onPress: this.onPressLine,
        rightTitle: '@ittp',
      },
      {
        title: 'Facebook Fanpage',
        icon: 'facebook',
        onPress: this.onPressFacebook
      },
      {
        title: 'เว็บไซต์',
        icon: 'web',
        onPress: this.onPressWedpage
      },
    ];
    const list2 = [
      {
        title: 'เงื่อนไขการให้บริการ',
        icon: 'error-outline',
        onPress: this.onPressInfo
      },
      {
        title: 'นโยบายความเป็นส่วนตัว',
        icon: 'lock-outline',
        onPress: this.onPressInfo
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
