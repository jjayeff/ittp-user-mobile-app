import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  onPressLogin() {
    Actions.home();
  }
  render() {
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <TouchableOpacity onPress={this.onPressLogin}>
            <Image
              style={{ height: 120, width: 120 }}
              source={require('../../../../store/image/banks/ittp-icon.png')}
            />
          </TouchableOpacity>
        </View>
    );
  }
}

export default LoginForm;
