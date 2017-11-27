import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components/common';
import { PRIVACY } from '../../texts';
import PrivacyComponent from './components/Privacy';

class Privacy extends Component {
  onPressBack() {
    Actions.contact();
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header headerText={PRIVACY} onPress={this.onPressBack} />
        <PrivacyComponent />
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

export default Privacy;
