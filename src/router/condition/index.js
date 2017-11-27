import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { CONDITION } from '../../texts';
import ConditionComponent from './components/Condition';

class Condition extends Component {
  onPressBack() {
    Actions.contact();
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={CONDITION} onPress={this.onPressBack} />
        <ConditionComponent />
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

export default Condition;
