import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import { PRODUCT } from '../../texts';
import ProductComponent from './components/Product';

const Product = () => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Header headerText={PRODUCT} />
      <ProductComponent />
      <Bottom selectedTab={PRODUCT} />      
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',          
    flex: 1,
    flexDirection: 'column',
  },
});

export default Product;
