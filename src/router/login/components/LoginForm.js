import React, { Component } from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { SocialIcon } from 'react-native-elements';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { PASSWORD, ID } from '../../../texts';
import { Button } from '../../../components/common';

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
    this.fbAuth = this.fbAuth.bind(this);
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
  fbNew(accessToken) {
    Actions.citizenIdForm(accessToken);
  }
  async resetAccessToken() {
    try {
      Promise.all(
        AsyncStorage.getAllKeys()
          .then(ks => ks.map(
            async k => await AsyncStorage.removeItem(k).then(() => {
              Actions.login();
            }))
          )
      );
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
    }
  }
  fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
      if (result.isCancelled) {
        console.log('Login Cancelled');
      } else {
        console.log(`Login Success permission granted:${result.grantedPermissions}`);
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            const accessToken = data.accessToken;
            const responseInfoCallback = (error, res) => {
              if (error) {
                console.log(error);
              } else {
                const json = {
                  accessToken,
                  id: res.id
                };
                this.props.submitLoginFacebook(json);
              }
            };

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name'
                  }
                }
              },
              responseInfoCallback
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          }
        );
      }
    }, (error) => {
      console.log('some error occurred!!');
    });
  }
  renderLoading(loading) {
    return (
      <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }} >
        <Button
          title='Login'
          onPress={this.onPressLogin}
          icon='envira'
          type='font-awesome'
          spinner={loading}
        />
      </View>
    );
  }
  render() {
    const { accessToken, isLoggedIn, errorMessage, fbAccessToken, loading } = this.props.auth;
    if (errorMessage) {
      Alert.alert(errorMessage);
      this.props.submitLogout();
    }
    if (accessToken && isLoggedIn) {
      this.saveItem(accessToken, accessToken);
    }
    if (accessToken && !isLoggedIn) {
      this.fbNew(accessToken);
    }
    if (fbAccessToken) {
      this.resetAccessToken();
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
              label={PASSWORD}
              iconClass={FontAwesomeIcon}
              iconName={'key'}
              iconColor={'#03A9F4'}
              iconSize={20}
              style={{ height: 60, width: '80%', alignSelf: 'center' }}
              labelStyle={{ fontFamily: 'Cloud-Light' }}
              onChangeText={(text) => { this.onChangePassword(text); }}
              secureTextEntry
            />
          </View>
          {this.renderLoading(loading)}
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
              value={this.state.password}
              onPress={this.fbAuth}
            />
          </View>
        </Image>
      </View>
    );
  }
}

export default LoginForm;
