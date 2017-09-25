import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TEL } from '../../../texts';

class CardPlaceSaction extends Component {
  render() {
    const { title, image, subtitle, tel } = this.props.data;
    const { onPress } = this.props;
    const { textStyle, LinkTextStyle } = styles;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          titleStyle={{ fontFamily: 'Cloud-Light' }}
          image={image}
          imageStyle={{ width: '90%', height: 140, alignSelf: 'center' }}
          fontFamily='Cloud-Light'
        >
          <Text style={textStyle}>
            {subtitle}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={LinkTextStyle}>
              {TEL} {tel}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 10,
    fontFamily: 'Cloud-Light',
    alignSelf: 'center'
  },
  LinkTextStyle: {
    marginBottom: 10,
    fontFamily: 'Cloud-Light',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
});

export default CardPlaceSaction;
