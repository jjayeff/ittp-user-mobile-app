import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

class CardPlaceSaction extends Component {
  render() {
    const { title, image, subtitle, tel } = this.props.data;
    const { onPress } = this.props;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          titleStyle={{ fontFamily: 'Cloud-Light' }}
          image={image}
          imageStyle={{ width: '90%', height: 140, alignSelf: 'center' }}
          fontFamily='Cloud-Light'
        >
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center' }}>
            {subtitle}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center', textDecorationLine: 'underline' }}>
              โทร. {tel}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

export default CardPlaceSaction;