import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';

class Login extends Component {
  constructor() {
    super();
    this.state = { hasToken: false };
  }
  componentWillMount() {
    Promise.all(
      AsyncStorage.getAllKeys()
        .then(ks => ks.map(
          k => this.getAccessToken(k))
        )
    );
  }
  onPressLogin() {
    Actions.home();
  }
  getAccessToken(key) {
    AsyncStorage.getItem(key).then((token) => {
      this.setState({ hasToken: token !== null });
    });
  }
  render() {
    const { containerStyle } = styles;
    if (this.state.hasToken) {
      this.onPressLogin();
    }
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
