import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { TimeFormat } from '../../../utils/base';

class LoanRefresh extends Component {
  state = { date: moment() }
  render() {
    const { textStyle } = styles;
    const { onPress } = this.props;
    return (
        <View style={{ alignItems: 'flex-end', paddingRight: 20, paddingBottom: 10 }}>       
          <TouchableOpacity onPress={onPress}>
            <Text style={textStyle}>อัพเดทล่าสุด {TimeFormat(this.state.date)}</Text>
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
    fontSize: 12,
    backgroundColor: '#153d8a',    
    color: '#ffffff'          
  }
});

export default LoanRefresh;
