import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const BarcodeImage = (props) => {
  const { 
    containerStyle,
    buttonStyle
  } = styles;
  const { onPress } = props;
  return (
    <View style={containerStyle}>
      <View style={{ alignItems: 'center', padding: 10 }}>
        <Image
          style={{ width: '100%', height: 100, }}
          source={require('../../../../store/image/barcode-test.png')}      
        />
      </View>
      <Button 
        onPress={onPress}
        icon={{ name: 'search', color: '#000' }}          
        title='กดเพื่อขยายภาพ'  
        color='#000'
        fontFamily='Cloud-Light'
        fontSize={13}   
        backgroundColor='#fff'
        buttonStyle={buttonStyle}            
      /> 
    </View>   
  );
};

const styles = StyleSheet.create({
  containerStyle: {       
    flex: 1,         
    flexDirection: 'column'
  },
  buttonStyle: {
    borderRadius: 25,
    width: '40%', 
    height: 35,
    borderColor: '#989898', 
    borderWidth: 1, 
    alignSelf: 'center'
  },
});

export default BarcodeImage;
