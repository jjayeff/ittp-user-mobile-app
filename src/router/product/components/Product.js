import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardProduct from './CardProduct';

class Product extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <CardProduct />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {         
    flex: 1,
    justifyContent: 'space-between',         
  },
});

export default Product;
