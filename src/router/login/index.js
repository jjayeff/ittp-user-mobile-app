import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

class Login extends Component {
  onPressLogin() {
    Actions.home();
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {        
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%', 
    width: '100%',
    backgroundColor: '#fff'
  },
});

export default Login;
