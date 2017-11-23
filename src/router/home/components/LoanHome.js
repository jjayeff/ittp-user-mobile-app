import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Money } from '../../../utils/base';
import { normalize } from '../../../utils/fontResponsive';
import { 
  BATH, 
  ALL_LOAN,
  LOAN,
  ALL_TOTAL,
  CLICK_DETAIL
} from '../../../texts';

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
              <Text style={textStyle}> {ALL_LOAN} {num} {LOAN}</Text>
              <Text style={smallTextStyle}>{ALL_TOTAL} {Money(total, true)} {BATH}</Text>
            </View>
            <View style={{ paddingTop: 7, alignItems: 'flex-end' }}>
              <Text style={bigTextStyle}>{CLICK_DETAIL}</Text>
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
    fontSize: normalize(30),
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
  },
  textStyle: {
    fontSize: normalize(22),
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    paddingLeft: 2,
  },
  smallTextStyle: {
    fontSize: normalize(16),
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    paddingLeft: 9,
  },
});

export default LoanHome;
