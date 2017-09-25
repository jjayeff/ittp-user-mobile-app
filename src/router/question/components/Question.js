import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionList from './QuestionList';

class Question extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <QuestionList />
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

export default Question;
