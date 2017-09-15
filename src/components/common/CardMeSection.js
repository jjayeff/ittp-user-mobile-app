import React from 'react';
import {
  View,
} from 'react-native';

const CardMeSection = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    height: 40
  }
};

export { CardMeSection };
