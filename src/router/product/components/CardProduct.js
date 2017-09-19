import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import CardProductSaction from './CardProductSaction';
import { DataProduct } from './DataProduct';

class CardProduct extends Component {
  renderComponents() {
    return (
      <View>
        {
          DataProduct.map((item, i) => (
            <CardProductSaction key={i} data={item} />             
          ))
        }
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View>
          {this.renderComponents()}
        </View>
      </ScrollView>
    );
  }
}

export default CardProduct;
