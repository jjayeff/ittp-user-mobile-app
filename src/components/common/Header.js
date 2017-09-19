import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { normalize } from '../../utils/fontResponsive';

class Header extends Component {
  onPressLogOut() {
    Actions.login();
  }
  renderBack(onPress) {
    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Icon name='keyboard-arrow-left' color='#fff' size={32} iconStyle={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      );
    }
    return <View style={{ width: 30, height: 30 }} />;
  }
  render() {
    const { headerText, onPress } = this.props;
    const { headerStyle, textStyle } = styles;
    return (
      <View style={headerStyle}>
        {this.renderBack(onPress)}
        <Text style={textStyle}> {headerText} </Text>
        <View style={{ width: 30, height: 30 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
    shadowColor: 'steelblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
    backgroundColor: '#4d9edd'
  },
  textStyle: {
    color: '#fff',
    fontSize: normalize(24),
    fontFamily: 'Cloud-Light',
  }
});


export { Header };
