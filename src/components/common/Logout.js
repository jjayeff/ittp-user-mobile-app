import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Logout = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name='g-translate' />
  </TouchableOpacity>
);

export { Logout };
