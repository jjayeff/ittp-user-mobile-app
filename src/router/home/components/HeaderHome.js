import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class HeaderHome extends Component {
  onPressMe() {
    Actions.me();
  }
  render() {
    const { firstname, lastname } = this.props;
    return (
      <List>
        <ListItem
          onPress={this.onPressMe}
          roundAvatar
          title={'สวัสดี'}
          subtitle={`คุณ ${firstname} ${lastname} `}
          subtitleStyle={{ fontFamily: 'Cloud-Light' }}
          avatar={require('../../../../store/image/test.jpeg')}
          fontFamily='Cloud-Light'
          chevronColor='#366dc0'
        />
      </List>
    );
  }
}

export default HeaderHome;
