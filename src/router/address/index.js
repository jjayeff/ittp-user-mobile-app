import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { ADDRESS } from '../../texts';
import AddressComponent from './containers/Address';

class Address extends Component {
  onPressBack() {
    Actions.me();
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={ADDRESS} onPress={this.onPressBack} />
        <AddressComponent />
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

export default Address;
