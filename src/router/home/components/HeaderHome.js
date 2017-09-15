import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class HeaderHome extends Component {
  render() {
    const { 
      bigTextStyle,  
      homeImageStyle, 
      smallTextStyle
    } = styles;
    const { firstname } = this.props;
    return (
      <View style={{ paddingBottom: 5 }}>
        <Image 
          style={homeImageStyle}
          source={require('../../../../store/image/homes/home-image.png')}
        >
          <View style={{ paddingTop: 50, paddingLeft: 20, flexDirection: 'row' }} >
            <View style={{ paddingTop: 10 }}>
              <Image 
                style={{ width: 60, height: 60, borderRadius: 30 }}
                source={require('../../../../store/image/test.jpeg')}
              />
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text style={bigTextStyle}> สวัสดี </Text>
              <Text style={smallTextStyle}>คุณ {firstname}</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeImageStyle: {
    width: '100%', 
    height: 160, 
  },
  bigTextStyle: {
    fontSize: 28,
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
  },
  smallTextStyle: {
    fontSize: 16,
    fontFamily: 'Cloud-Light',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
    paddingLeft: 10,
  },
});

export default HeaderHome;
