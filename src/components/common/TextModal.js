import React from 'react';
import {
  View,
} from 'react-native';
import Hr from 'react-native-hr';

const TextModal = ({ children }) => {
  const { lineContainerStyle } = styles;
  return (
    <View>
      <View>{children}</View>
      <View style={lineContainerStyle}>
        <Hr lineColor='steelblue' />
      </View>
    </View>
  );
};

const styles = {
  lineContainerStyle: {      
    paddingTop: 6,
    paddingBottom: 6,    
  },
};

export { TextModal };
