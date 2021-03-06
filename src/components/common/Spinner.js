import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const Spinner = ({ size, color }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || 'gray'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export { Spinner };
