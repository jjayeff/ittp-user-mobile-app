import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { DateFormat } from '../../../utils/base';
import { normalize } from '../../../utils/fontResponsive';

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
  renderDateComponent(date) {
    const { textStyle } = styles;
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <Icon name='schedule' color='#989898' size={normalize(15)} />
        <Text style={textStyle}>{DateFormat(date)}</Text>
      </View>
    );
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
          subtitle={this.renderDateComponent(date)}
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

const styles = StyleSheet.create({
  textStyle: {
    paddingLeft: 4,
    paddingTop: 4,
    color: '#989898',
    fontFamily: 'Cloud-Bold',
    fontSize: normalize(13)
  }
});

export default TransactionListSaction;
