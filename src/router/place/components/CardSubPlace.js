import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import CardSubPlaceSaction from './CardSubPlaceSaction';
import { DataSubPlace } from './DataPlace';

class CardSubPlace extends Component {
  renderComponents() {
    return (
      <View>
        {
          DataSubPlace.map((item, i) => (
            <CardSubPlaceSaction
              key={i} 
              data={item} 
              onPress={() => Communications.phonecall(item.tel, true)} 
            />             
          ))
        }
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingBottom: 30 }}>
          {this.renderComponents()}
        </View>
      </ScrollView>
    );
  }
}

export default CardSubPlace;
