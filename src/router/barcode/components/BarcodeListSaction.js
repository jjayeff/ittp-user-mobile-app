import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { DateFormat } from '../../../utils/base';

class TransactionListSaction extends Component {
  trcAvatar(icon) {
    switch (icon) {
      case 'BBL':
        return require('../../../../store/image/banks/bbl.png');
      case 'GSB':
        return require('../../../../store/image/banks/gsb.png');
      case 'ITTP':
        return require('../../../../store/image/banks/ittp.png');
      default:
        return require('../../../../store/image/banks/ittp.png');
    }
  }
  render() {
    const {
      cash,
      trc,
      date,
      check,
      index
    } = this.props.transaction;
    return (
      <View>
        <ListItem
          key={index}
          roundAvatar
          title={trc.name}
          subtitle={DateFormat(date)}
          subtitleStyle={{ fontFamily: 'Cloud-Light' }}
          hideChevron
          rightTitle={cash}
          rightTitleStyle={{ color: check ? 'red' : 'green', fontFamily: 'Cloud-Light' }}
          avatar={this.trcAvatar(trc.icon)}
          onPress={this.showModal}
          fontFamily='Cloud-Light'
        />
    </View>
    );
  }
} 

export default TransactionListSaction;
