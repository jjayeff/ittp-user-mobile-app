import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LoanSummary = (props) => {
  const { loanSummaryContainerStyle, detailTypeLoanStyle, textStyle, textColorStyle } = styles;
  const { firstname, lastname, loan_id, product_name } = props.loan;
  return (
    <View style={loanSummaryContainerStyle}>
      <Text style={textStyle}>{firstname} {lastname}</Text>
      <View style={detailTypeLoanStyle}>
        <Text style={textStyle}>{loan_id}</Text>
        <Text style={textColorStyle}>{product_name}</Text>          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loanSummaryContainerStyle: {       
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',            
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,  
  },
  detailTypeLoanStyle: {       
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',           
  },
  textStyle: {
    fontSize: 17,
    fontFamily: 'Cloud-Light',
    color: '#153d8a'
  },
  textColorStyle: {
    fontSize: 12,
    backgroundColor: '#153d8a',    
    color: '#ffffff'          
  }
});

export default LoanSummary;
