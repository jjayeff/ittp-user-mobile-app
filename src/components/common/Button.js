import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { normalize } from '../../utils/fontResponsive';
import { Spinner } from '../common';


class Button extends Component {
  renderLoading(icon, type, textStyle, title, spinner) {
    if (spinner) {
      return (
        <Spinner size='small' color='#fff' />
      );
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={icon}
          type={type}
          color='#fff'
        />
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  }
  render() {
    const { buttonStyle, textStyle } = styles;
    const { onPress, title, icon, type, spinner } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={{ alignItems: 'center' }} >
          <View style={buttonStyle}>
            {this.renderLoading(icon, type, textStyle, title, spinner)}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: normalize(16),
    fontFamily: 'Cloud-Light',
    paddingLeft: 10,
  },
  buttonStyle: {
    backgroundColor: '#4d9edd',
    borderRadius: 30,
    height: 50,
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { Button };
