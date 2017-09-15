import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Money } from '../../../utils/base';
import { BATH } from '../../../texts';

class LoanHome extends Component {
  render() {
    const {  
      textStyle, 
      imageStyle,
      smallTextStyle,
      bigTextStyle
    } = styles;
    const { onPress, num, total } = this.props;
    return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingBottom: 5 }}>
        <Image 
          style={imageStyle}
          source={require('../../../../store/image/homes/home-account.jpg')}
        >
          <View style={{ paddingTop: 7 }} >
            <Text style={textStyle}> สัญญาทั้งหมด {num} สัญญา</Text>
            <Text style={smallTextStyle}> ยอดค้างคงเหลือ {Money(total, true)} {BATH}</Text>
          </View>
          <View style={{ paddingTop: 7, alignItems: 'flex-end' }}>
            <Text style={bigTextStyle}>คลิกดูรายละเอียด</Text>
          </View>
        </Image>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {         
    flex: 1,
    flexDirection: 'column',   
  },
  homeImageStyle: {
    width: '100%', 
    height: 160, 
  },
  imageStyle: {
    width: '100%', 
    height: 130, 
    justifyContent: 'space-between' 
  },
  bigTextStyle: {
    fontSize: 30,
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    paddingLeft: 2,
  },
  smallTextStyle: {
    fontSize: 16,
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    paddingLeft: 5,
  },
});

export default LoanHome;
