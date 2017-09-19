import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './ContactList';

class Contact extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <ContactList />
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

export default Contact;
