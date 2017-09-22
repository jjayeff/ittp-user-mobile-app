import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { QUESTION } from '../../texts';
import QuestionComponent from './components/Question';

class Question extends Component {
  onPressBack() {
    Actions.me();    
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={QUESTION} onPress={this.onPressBack} />
        <QuestionComponent />
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

export default Question;
