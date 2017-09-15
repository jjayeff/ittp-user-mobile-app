import React from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

const Logout = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      style={{ width: 20, height: 20 }}
      source={require('../../../store/image/icons/logout-icon.png')}
    />
  </TouchableOpacity>
);

export { Logout };
