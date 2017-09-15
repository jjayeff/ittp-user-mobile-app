import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import { BARCODE } from '../../texts';
import BarcodeComponent from './containers/Barcode';

const Barcode = () => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Header headerText={BARCODE} />
      <BarcodeComponent />
      <Bottom selectedTab={BARCODE} />      
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',          
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
  },
});

export default Barcode;
