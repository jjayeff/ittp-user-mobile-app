import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { normalize } from '../../../utils/fontResponsive';
import { YOU } from '../../../texts';

class MeSummary extends Component {
  renderImage() {
    return (
      <Image
        style={{ width: 80, height: 80, borderRadius: 40, borderColor: 'black' }}
        source={require('../../../../store/image/test.jpeg')}
      />
    );
  }
  render() {
    const { containerStyle, textStyle, textsmallStyle } = styles;
    const { firstname, lastname, citizen_id } = this.props.loans[0];
    return (
      <View style={containerStyle}>
        {this.renderImage()}
        <View style={{ flexDirection: 'row' }}>
          <Icon name='person' color='#366dc0' />
          <Text style={textStyle}> {YOU} {firstname} {lastname}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='check-box' color='#366dc0' />
          <Text style={textsmallStyle}>{citizen_id}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  detailBackLoanStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  detailFrontLoanStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: normalize(17),
    paddingTop: 5,
    color: '#000',
    fontFamily: 'Cloud-Light'
  },
  textsmallStyle: {
    fontSize: normalize(15),
    paddingTop: 5,
    color: '#000',
    fontFamily: 'Cloud-Light'
  },
  textColorStyle: {
    fontSize: normalize(15),
    backgroundColor: '#153d8a',
    color: '#ffffff',
    fontFamily: 'Cloud-Light'
  }
});

export default MeSummary;
