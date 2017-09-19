import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { List, ListItem, SocialIcon } from 'react-native-elements';
import { normalize } from '../../utils/fontResponsive';

class CardLinkIcon extends Component {
  renderIcon(icon) {
    if (icon === 'facebook') {
      return (
        <SocialIcon type={icon} style={{ width: 20, height: 20 }} iconSize={normalize(14)} />
      );
    }
    return { name: icon, color: '#366dc0' };
  }
  renderComponent() {
    const { list } = this.props;
    return (
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={this.renderIcon(item.icon)}
              fontFamily='Cloud-Light'
              chevronColor='#366dc0'
              rightTitle={item.title === 'ศูนย์บริการลูกค้า' ? '02-153-9580' : null}
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
