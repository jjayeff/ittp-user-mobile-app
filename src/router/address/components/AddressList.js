import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const list1 = [
  {
    name: '88/359',
    subtitle: 'บ้านเลขที่'
  },
  {
    name: 'ภัทราวรรณ',
    subtitle: 'หมู่บ้าน คอนโดมิเนี่ยม'
  },
  {
    name: '2',
    subtitle: 'หมู่ที่'
  },
  {
    name: '12',
    subtitle: 'ตรอก/ซอย'
  },
  {
    name: 'ละหาร-ลำโพธิ์',
    subtitle: 'ถนน'
  },
  {
    name: '11110',
    subtitle: 'รหัสไปรษณีย์'
  },
  {
    name: 'นนทบุรี',
    subtitle: 'จังหวัด'
  },
  {
    name: 'บางบัวทอง',
    subtitle: 'เขต/อำเภอ'
  },
  {
    name: 'ละหาร',
    subtitle: 'แขวง/ตำบล'
  },
  {
    name: '089-984-9157',
    subtitle: 'เบอร์ติดต่อ'
  },
];

class AddressList extends Component {
  renderAddress(list, headText) {
    return (
      <List>
        <ListItem
          hideChevron
          title={headText}
          leftIcon={{ name: 'location-on', color: '#fff' }}
          containerStyle={{ backgroundColor: '#366dc0' }}
          titleStyle={{ color: '#fff' }}
        />
        {
          list.map((l, i) => (
            <ListItem
              hideChevron
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
      </List>
    );
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.renderAddress(list1, 'ที่อยู่ตามทะเบียนบ้าน')}
        {this.renderAddress(list1, 'ที่อยู่ปัจจุบัน')}        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default AddressList;
