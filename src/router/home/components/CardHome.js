import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardIcon, CardIcons } from '../../../components/common';


const CardHome = (props) => {
  const { containerStyle, rowStyle } = styles;
  const { me, history, barcode, product } = props.onPress;
  return (
    <View style={containerStyle}>
      <View style={rowStyle}>
        <CardIcon title='ประวัติการชำระเงิน' icon='library-books' iconColor='#03A9F4' onPress={history} />
        <CardIcon title='จ่ายเงิน' icon='payment' iconColor='#366dc0' onPress={barcode} /> 
      </View>
      <View style={rowStyle}>
        <CardIcon title='ข้อมูลส่วนตัว' icon='person' iconColor='#03A9F4' />
        <CardIcon title='ช่องทางติดต่อ' icon='home' iconColor='#366dc0' /> 
      </View>
      <View style={rowStyle}>
        <CardIcons title='ช่องทางจ่ายเงิน' icon='get-app' iconColor='#366dc0' />
        <CardIcons title='ประเภทสัญญา' icon='account-balance' iconColor='#03A9F4' onPress={product} /> 
        <CardIcons title='คำถามที่พบบ่อย' icon='?' iconColor='#ED6351' />         
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',          
    flex: 1,
    width: '100%',
  },
  rowStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingTop: 5 
  }
});

export default CardHome;
