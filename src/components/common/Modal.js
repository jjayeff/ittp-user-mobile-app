import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { normalize } from '../../utils/fontResponsive';

class ModalComponent extends Component {
  render() {
    const { containerStyle, containerDetailStyle, closeStyle } = styles;
    const { onPress, Modal } = this.props;
    return (
    <View style={containerStyle}>
      <View style={containerDetailStyle}>
        <Modal />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Icon name='cancel' color='#366dc0' size={72} />
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',    
    justifyContent: 'space-between',                
    paddingTop: 50,
    paddingBottom: 50,
  },
  containerDetailStyle: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',    
    justifyContent: 'space-between',                
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#153d8a',
    paddingTop: 50,
    paddingBottom: 50,
  },
  closeStyle: {     
    marginTop: 25,     
    width: 60,
    height: 60,
    alignSelf: 'center' 
  },
  textStyle: {
    alignSelf: 'center',
    color: 'steelblue',
    fontFamily: 'Cloud-Light',
    fontSize: normalize(12),
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { ModalComponent };
