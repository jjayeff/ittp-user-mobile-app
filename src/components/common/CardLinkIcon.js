import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class CardLinkIcon extends Component {
  renderComponent() {
    const { list } = this.props;
    return (
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon, color: '#366dc0' }}
              fontFamily='Cloud-Light'
              chevronColor='#366dc0'
              titleStyle={{ color: '#000' }}
              onPress={item.onPress}
            />
          ))
        }
      </List>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#e6eaed',
    width: '100%',
  },
};

export { CardLinkIcon };
