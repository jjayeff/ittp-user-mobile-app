import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { Icon } from 'react-native-elements';
import { normalize } from '../../utils/fontResponsive';

const CardIcon = (props) => {
  const { title, icon, iconColor } = props;
  const styles = {
    containerStyle: {
      height: 70,
      width: '49%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: '#fff'
    },
    iconStyle: {
      height: 35,
      width: 35,
      borderRadius: 20,
      backgroundColor: iconColor,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      fontFamily: 'Cloud-Light',
      paddingTop: 2,
      fontSize: normalize(14)
    }
  };
  const { containerStyle, iconStyle, textStyle } = styles;
  const { onPress } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyle}>
        <View style={iconStyle} >
          <Icon name={icon} color='#fff' />
        </View>
        <Text style={textStyle}> {title} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { CardIcon };
