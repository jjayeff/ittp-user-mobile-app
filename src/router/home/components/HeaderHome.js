import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

class HeaderHome extends Component {
  render() {
    const { firstname, lastname } = this.props;
    return (
      <List>
        <ListItem
          roundAvatar
          title={'สวัสดี'}
          subtitle={`คุณ ${firstname} ${lastname} `}
          subtitleStyle={{ fontFamily: 'Cloud-Light' }}
          avatar={require('../../../../store/image/test.jpeg')}
          fontFamily='Cloud-Light'
        />
      </List>
    );
  }
}

export default HeaderHome;
