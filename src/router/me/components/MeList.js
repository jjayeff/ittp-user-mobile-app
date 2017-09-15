import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardLinkIcon } from '../../../components/common';

class MeList extends Component {
  onPressInfo() {
    // Actions.info();
  }
  render() {
    const list1 = [
      {
        title: 'ข้อมูลส่วนตัว',
        icon: 'account-circle',
        onPress: this.onPressInfo
      },
      {
        title: 'ที่อยู่',
        icon: 'home'
      },
    ];
    const list2 = [
      {
        title: 'ช่องทางการจ่ายเงิน',
        icon: 'payment'
      },
      {
        title: 'สถาที่ติดต่อเรา',
        icon: 'account-balance'
      },
    ];
    const list3 = [
      {
        title: 'คำถามที่พบบ่อยๆ',
        icon: '?'
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
      <ScrollView>
        <View style={styles.container}>
          <CardLinkIcon list={list1} />
          <CardLinkIcon list={list2} />
          <CardLinkIcon list={list3} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#153d8a',
    width: '100%',
  },
});

export default MeList;
