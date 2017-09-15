import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MeSummary from './MeSummary.js';
import MeList from './MeList';

class Me extends Component {
  render() {
    const { meStyle } = styles;
    return (
      <View style={meStyle}>
        <View style={{ height: 200 }}>
          <MeSummary /> 
        </View>
        <MeList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  meStyle: {         
    flex: 1,
    justifyContent: 'space-between',   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Me;
