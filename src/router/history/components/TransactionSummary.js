import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Money } from '../../../utils/base';
import { normalize } from '../../../utils/fontResponsive';
import { PRINCIPAL, BATH } from '../../../texts';

const TransactionSummary = (props) => {
  const {
    transactionSummaryContainerStyle,
    detailBackLoanStyle,
    detailFrontLoanStyle,
    textStyle,
    textColorStyle,
    textsmallStyle
  } = styles;
  const { firstname, lastname, loan_id, product_name, cf_principal } = props.loan;
  return (
    <View style={transactionSummaryContainerStyle}>
      <View style={detailFrontLoanStyle}>
        <Text style={textStyle}>{firstname} {lastname}</Text>
        <Text style={textsmallStyle}>{PRINCIPAL} {Money(cf_principal, true)} {BATH}</Text>
      </View>
      <View style={detailBackLoanStyle}>
        <Text style={textStyle}>{loan_id}</Text>
        <Text style={textColorStyle}>{product_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionSummaryContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  detailBackLoanStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  detailFrontLoanStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
    fontSize: normalize(14),
    backgroundColor: '#153d8a',
    color: '#ffffff'
  }
});

export default TransactionSummary;
