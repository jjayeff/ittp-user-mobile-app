import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { hasAccessToken } from '../../reduxModules/auth';
import LoginForm from './containers/LoginForm';

class Login extends Component {
  constructor() {
    super();
    this.state = { hasToken: false };
    this.getAccessToken = this.getAccessToken.bind(this);
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
      this.props.hasAccessToken(key);
    });
  }
  render() {
    const { containerStyle } = styles;
    const { accessToken, isLoggedIn } = this.props.auth;
    if (this.state.hasToken && accessToken && isLoggedIn) {
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

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, { hasAccessToken })(Login);

