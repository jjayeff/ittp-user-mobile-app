import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TEL } from '../../../texts';

class CardSubPlaceSaction extends Component {
  render() {
    const { title, place, subtitle, tel } = this.props.data;
    const { onPress } = this.props;
    const { textStyle, textCenterStyle, LinkTextStyle } = styles;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          titleStyle={{ fontFamily: 'Cloud-Light' }}
        >
          <Text style={textStyle}>
            {place}
          </Text>
          <Text style={textCenterStyle}>
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
  textCenterStyle: {
    marginBottom: 10,
    fontFamily: 'Cloud-Light',
    alignSelf: 'center',
    textAlign: 'center'
  },
  LinkTextStyle: {
    marginBottom: 10,
    fontFamily: 'Cloud-Light',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
});

export default CardSubPlaceSaction;
