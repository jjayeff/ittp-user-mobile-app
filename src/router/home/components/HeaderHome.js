import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { normalize } from '../../../utils/fontResponsive';

class HeaderHome extends Component {
  onPressMe() {
    Actions.me();
  }
  renderComponent() {
    const { textStyle } = styles;
    const { firstname, lastname } = this.props;    
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Text style={textStyle}>{`คุณ ${firstname} ${lastname} `}</Text>
      </View>
    );
  }
  render() {
    return (
      <List>
        <ListItem
          onPress={this.onPressMe}
          roundAvatar
          title={'สวัสดี'}
          titleStyle={{ fontSize: normalize(20) }}
          subtitle={this.renderComponent()}
          avatar={require('../../../../store/image/test.jpeg')}
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
