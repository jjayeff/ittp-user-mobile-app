import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { normalize } from '../../../utils/fontResponsive';
import {
  HELLO,
  YOU
} from '../../../texts';

class HeaderHome extends Component {
  renderComponent() {
    const { textStyle } = styles;
    const { firstname, lastname } = this.props;
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Text style={textStyle}>{`${YOU} ${firstname} ${lastname} `}</Text>
      </View>
    );
  }
  render() {
    const { onPress } = this.props;
    return (
      <List>
        <ListItem
          onPress={onPress}
          title={HELLO}
          titleStyle={{ fontSize: normalize(20) }}
          subtitle={this.renderComponent()}
          fontFamily='Cloud-Light'
          chevronColor='#366dc0'
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#989898',
    fontFamily: 'Cloud-Bold',
    fontSize: normalize(17)
  }
});

export default HeaderHome;
