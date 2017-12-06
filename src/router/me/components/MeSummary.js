import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { normalize } from '../../../utils/fontResponsive';
import { YOU } from '../../../texts';

class MeSummary extends Component {
  onPressImage() {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  }
  renderImage() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressImage}>
        <Image
          style={{ width: 180, height: 60 }}
          source={require('../../../../store/image/ITTP.jpg')}
        />
      </TouchableWithoutFeedback>
    );
  }
  render() {
    const { containerStyle, textStyle, textsmallStyle } = styles;
    const { firstname, lastname, citizen_id } = this.props.loans[0];
    return (
      <View style={containerStyle}>
        {this.renderImage()}
        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
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
