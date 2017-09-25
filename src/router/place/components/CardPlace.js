import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import CardPlaceSaction from './CardPlaceSaction';
import { DataPlace } from './DataPlace';

class CardPlace extends Component {
  renderComponents() {
    return (
      <View>
        {
          DataPlace.map((item, i) => (
            <CardPlaceSaction
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

export default CardPlace;
