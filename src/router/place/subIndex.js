import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { SUBPLACE } from '../../texts';
import SubPlaceComponent from './components/SubPlace';

class SubPlace extends Component {
  onPressBack() {
    Actions.me();    
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={SUBPLACE} onPress={this.onPressBack} />
        <SubPlaceComponent />
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

export default SubPlace;
