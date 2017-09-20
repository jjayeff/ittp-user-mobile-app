import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

class CardSubPlaceSaction extends Component {
  render() {
    const { title, place, subtitle, tel } = this.props.data;
    const { onPress } = this.props;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          titleStyle={{ fontFamily: 'Cloud-Light' }}
        >
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center' }}>
            {place}
          </Text>
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center', textAlign: 'center' }}>
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

export default CardSubPlaceSaction;
