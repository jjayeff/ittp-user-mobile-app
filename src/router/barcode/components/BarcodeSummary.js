import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Hr from 'react-native-hr';
import { normalize } from '../../../utils/fontResponsive';
import { DateFormat, Money } from '../../../utils/base';
import {
  CF_PRINCIPAL,
  DUE_DATE,
  TYPE_LOAN,
  MIN_DUE,
  BATH
} from '../../../texts';

class BarcodeSummary extends Component {
  renderAmount(minDue, trc) {
    if (trc === 'PO') {
      return (
        <View style={styles.flexEndStyle}>
          <Text style={styles.textColorsStyle} >ปิดสัญญาเรียบร้อย</Text>
        </View>
      );
    }
    return (
      <View style={styles.flexEndStyle}>
        <Text style={styles.textColorStyle} >{Money(minDue)} {BATH}</Text>
      </View>
    );
  }
  render() {
    const {
      containerStyle,
      rowStyle,
      flexEndStyle,
      textStyle,
      textsmallStyle
    } = styles;
    const { loan_id, due_date, min_due, cf_principal, product_name, trc } = this.props.loan;
    const { index, num } = this.props;
    return (
      <View style={{ height: 145 }}>
        <View style={containerStyle}>
          <View style={{ alignItems: 'center' }}>
            <Text style={textsmallStyle}>{index + 1}/{num}</Text>
          </View>
          <View style={rowStyle}>
            <Text style={textStyle}>{loan_id}</Text>
            {this.renderAmount(min_due, trc)}
          </View>
          <View style={rowStyle}>
            <View>
              <Text style={textsmallStyle}>{TYPE_LOAN} {product_name}</Text>
              <Text style={textsmallStyle}>{DUE_DATE} {DateFormat(due_date)}</Text>
              <Text style={textsmallStyle}>{CF_PRINCIPAL} {Money(cf_principal)} {BATH}</Text>
            </View>
            <View style={flexEndStyle}>
              <Text style={textsmallStyle} >{MIN_DUE}</Text>
            </View>
          </View>
        </View>
        <Hr lineColor='steelblue' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexEndStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  textStyle: {
    fontSize: normalize(18),
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textsmallStyle: {
    fontSize: normalize(14),
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textColorStyle: {
    fontSize: normalize(30),
    fontFamily: 'Cloud-Light',
    color: 'red'
  },
  textColorsStyle: {
    fontSize: normalize(20),
    fontFamily: 'Cloud-Light',
    color: 'green'
  }
});

export default BarcodeSummary;
