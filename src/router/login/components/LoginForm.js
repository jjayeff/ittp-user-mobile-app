import React, { Component } from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { Button, SocialIcon } from 'react-native-elements';
import { PHONE, ID } from '../../../texts';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeCitizenId = this.onChangeCitizenId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
      Actions.home();
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
    }
  }
  onPressLogin() {
    this.props.submitLogin(this.state);
  }
  onChangeCitizenId(text) {
    this.setState({ username: text });
  }
  onChangePassword(text) {
    this.setState({ password: text });
  }
  render() {
    const { accessToken, isLoggedIn, errorMessage } = this.props.auth;
    if (errorMessage) {
      Alert.alert(errorMessage);
      this.props.submitLogout();
    }
    if (accessToken && isLoggedIn) {
      this.saveItem(accessToken, accessToken);
    }
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Image
          style={{ height: '100%', width: '100%', justifyContent: 'center', }}
          source={require('../../../../store/image/backgroud-login.png')}
        >
          <View style={{ alignSelf: 'center', paddingBottom: 50 }}>
            <Image
              style={{ height: 60, width: 180 }}
              source={require('../../../../store/image/ittp-logo.png')}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Fumi
              label={ID}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#03A9F4'}
              iconSize={20}
              style={{ height: 60, width: '80%', alignSelf: 'center' }}
              labelStyle={{ fontFamily: 'Cloud-Light' }}
              onChangeText={(text) => { this.onChangeCitizenId(text); }}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Fumi
              label={PHONE}
              iconClass={FontAwesomeIcon}
              iconName={'phone'}
              iconColor={'#03A9F4'}
              iconSize={20}
              style={{ height: 60, width: '80%', alignSelf: 'center' }}
              labelStyle={{ fontFamily: 'Cloud-Light' }}
              onChangeText={(text) => { this.onChangePassword(text); }}
              secureTextEntry
            />
          </View>
          <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }} >
            <Button
              raised
              onPress={this.onPressLogin}
              icon={{ name: 'envira', type: 'font-awesome' }}
              buttonStyle={{ backgroundColor: '#4d9edd', borderRadius: 30 }}
              title='Login'
              value={this.state.citizenId}
            />
          </View>
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
              value={this.state.password}
            />
          </View>
        </Image>
      </View>
    );
  }
}

export default LoginForm;
