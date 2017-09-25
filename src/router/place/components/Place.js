import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardPlace from './CardPlace';

class Place extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <CardPlace />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Place;
