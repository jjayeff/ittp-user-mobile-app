import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { TimeFormat } from '../../../utils/base';
import { normalize } from '../../../utils/fontResponsive';
import { LAST_DATE } from '../../../texts';

class LoanRefresh extends Component {
  state = { date: moment() }
  render() {
    const { textStyle } = styles;
    const { onPress } = this.props;
    return (
      <View style={{ alignItems: 'flex-end', paddingRight: 20, paddingBottom: 10 }}>
        <TouchableOpacity onPress={onPress}>
          <Text style={textStyle}>{LAST_DATE} {TimeFormat(this.state.date)}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textColorStyle: {
    fontSize: normalize(12),
    backgroundColor: '#153d8a',
    color: '#ffffff'
  }
});

export default LoanRefresh;
