import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import { Button } from 'react-native-elements';
import { normalize } from '../../../utils/fontResponsive';
import { ZOOM } from '../../../texts';

const BarcodeImage = (props) => {
  const {
    containerStyle,
    buttonStyle
  } = styles;
  const { onPress } = props;
  return (
    <View style={containerStyle}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        {/* <Barcode
          value="010555414604900 59040030152 050717 2685500"
          format="CODE128"
          width={0.9}
        /> */}
        <Text style={{ fontFamily: 'code128', fontSize: normalize(72) }}>
          010555414604900
        </Text>
      </View>
      <Button
        onPress={onPress}
        icon={{ name: 'search', color: '#000' }}
        title={ZOOM}
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
