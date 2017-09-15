import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity
} from 'react-native';

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
        <Image
          style={closeStyle}
          source={require('../../../store/image/icons/close-icon.png')}        
        />
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
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { ModalComponent };
