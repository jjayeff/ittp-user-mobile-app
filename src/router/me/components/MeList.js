import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardLinkIcon } from '../../../components/common';

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
  render() {
    const list1 = [
      {
        title: 'ประเภทสัญญา',
        icon: 'account-balance',
        onPress: this.onPressProduct
      },
      {
        title: 'ช่องทางการจ่ายเงิน',
        icon: 'payment'
      },
    ];
    const list2 = [
      {
        title: 'สถานที่ติดต่อ',
        icon: 'home',
        onPress: this.onPressPlace        
      },
      {
        title: 'ตัวแทนร้านค้า',
        icon: 'record-voice-over',
        onPress: this.onPressSubPlace        
      },
      {
        title: 'ช่องทางติดต่อ',
        icon: 'message',
        onPress: this.onPressContact
      },
    ];
    const list3 = [
      {
        title: 'คำถามที่พบบ่อยๆ',
        icon: '?',
        onPress: this.onPressQuestion
      },
      {
        title: 'เกี่ยวกับบริษัทไอทีทีพี',
        icon: 'school'
      },
      {
        title: 'ออกจากระบบ',
        icon: 'undo'
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
