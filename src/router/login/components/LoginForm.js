import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

class LoginForm extends Component {
  onPressLogin() {
    Actions.home();
  }
  render() {
    return (
        <View style={{ height: '100%', width: '100%' }}>
          <TouchableOpacity onPress={this.onPressLogin}>
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
                  label={'เบอร์โทรศัพท์มือถือ'}
                  iconClass={FontAwesomeIcon}
                  iconName={'university'}
                  iconColor={'#03A9F4'}
                  iconSize={20}
                  style={{ height: 60, width: '80%', alignSelf: 'center' }}
                  labelStyle={{ fontFamily: 'Cloud-Light' }}
                />
              </View>
              <View style={{ paddingBottom: 10 }}>
                <Fumi
                  label={'หมายเลขบัตรประชาชน'}
                  iconClass={FontAwesomeIcon}
                  iconName={'university'}
                  iconColor={'#03A9F4'}
                  iconSize={20}
                  style={{ height: 60, width: '80%', alignSelf: 'center' }}
                  labelStyle={{ fontFamily: 'Cloud-Light' }}
                />
              </View>
            </Image>
          </TouchableOpacity>
        </View>
    );
  }
}

export default LoginForm;
