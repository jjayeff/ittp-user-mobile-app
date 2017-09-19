import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Hr from 'react-native-hr';
import { normalize } from '../../../utils/fontResponsive';

const BarcodeSummary = (props) => {
  const { 
    containerStyle,
    rowStyle, 
    flexEndStyle, 
    textStyle, 
    textColorStyle, 
    textsmallStyle 
  } = styles;
  const { firstname, lastname, loan_id, product_name } = props.loan;
  return (
    <View style={{ height: 125 }}>
      <View style={containerStyle}>
        <View style={rowStyle}>
          <Text style={textStyle}>{loan_id}</Text>      
          <View style={flexEndStyle}>
            <Text style={textColorStyle} >1500.00 บาท</Text>        
          </View>
        </View>
        <View style={rowStyle}>
          <View>
            <Text style={textsmallStyle}>ประเภทสินเชื่อ สินเชื่อเงินสด</Text>            
            <Text style={textsmallStyle}>กรุณาชำระภายในวันที่ 20/07/2560</Text>
            <Text style={textsmallStyle}>ยอดค้างชำระทั้งหมด 24,100</Text> 
          </View>
          <View style={flexEndStyle}>
            <Text style={textStyle} >ยอดขั้นต่ำที่ต้องชำระ</Text>        
          </View>
        </View>
      </View>
      <Hr lineColor='steelblue' />
    </View>            
  );
};

const styles = StyleSheet.create({
  containerStyle: {       
    flex: 1,         
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,  
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between'
  },
  flexEndStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',           
  },
  textStyle: {
    fontSize: normalize(17),
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textsmallStyle: {
    fontSize: normalize(13),
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textColorStyle: {
    fontSize: normalize(32),
    fontFamily: 'Cloud-Light',
    color: 'red'          
  }
});

export default BarcodeSummary;
