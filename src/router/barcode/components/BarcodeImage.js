import React from 'react';
import { View, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { Button } from 'react-native-elements';
import { normalize } from '../../../utils/fontResponsive';

const BarcodeImage = (props) => {
  const {
    containerStyle,
    buttonStyle
  } = styles;
  const { onPress } = props;
  return (
    <View style={containerStyle}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Barcode
          value="010555414604900 59040030152 050717 2685500"
          format="CODE128"
          width={0.9}
        />
      </View>
      <Button
        onPress={onPress}
        icon={{ name: 'search', color: '#000' }}
        title='กดเพื่อขยายภาพ'
        color='#000'
        fontFamily='Cloud-Light'
        fontSize={normalize(13)}
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
