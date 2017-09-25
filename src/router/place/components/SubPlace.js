import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardSubPlace from './CardSubPlace';

class SubPlace extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <CardSubPlace />
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

export default SubPlace;
