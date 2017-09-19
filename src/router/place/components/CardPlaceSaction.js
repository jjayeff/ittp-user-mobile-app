import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class CardPlaceSaction extends Component {
  render() {
    const { title, image, subtitle, tel } = this.props.data;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          image={image}
          imageStyle={{ width: '90%', height: 140, alignSelf: 'center' }}
          fontFamily='Cloud-Light'
        >
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center' }}>
            {subtitle}
          </Text>
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center', textDecorationLine: 'underline' }}>
            โทร. {tel}
          </Text>
        </Card>
      </View>
    );
  }
}

export default CardPlaceSaction;
