import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { PLACE } from '../../texts';
import PlaceComponent from './components/Place';

class Place extends Component {
  onPressBack() {
    Actions.me();    
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={PLACE} onPress={this.onPressBack} />
        <PlaceComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Place;
