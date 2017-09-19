import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Bottom } from '../../components/common';
import { CONTACT } from '../../texts';
import ContactComponent from './components/Contact';

class Contact extends Component {
  onPressBack() {
    Actions.me();    
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={CONTACT} onPress={this.onPressBack} />
        <ContactComponent />
        <Bottom selectedTab={CONTACT} />
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

export default Contact;
