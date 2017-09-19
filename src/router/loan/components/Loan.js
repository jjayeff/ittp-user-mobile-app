import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import LoanSummary from './LoanSummary';
import LoanDetail from './LoanDetail';
import LoanRefresh from './LoanRefresh';
import LoanButton from './LoanButton';
import { Spinner } from '../../../components/common';

class Loan extends Component {
  renderDetail() {
    const { loanStyle } = styles;   
    return this.props.loans.loanDb.map((loan, index) => 
      <ScrollView key={loan.loan_id}>
        <View style={loanStyle}>
          <LoanSummary loan={loan} />      
          <LoanDetail loan={loan} num={this.props.loans.loanDb.length} index={index} />
          <LoanRefresh fetchLoansCID={this.props.fetchLoansCID} />
          <LoanButton loan={loan} />
        </View>
      </ScrollView>
    );
  }
  render() {
    if (this.props.loans.loading) {
      return (
        <Swiper showsButtons loop={false} >
          {this.renderDetail()}
        </Swiper>
      );
    }
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignSelf: 'center' }}>
        <Spinner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loanStyle: {         
    flex: 1,
    flexDirection: 'column',   
    justifyContent: 'space-between',   
    width: '100%',
    paddingBottom: 40,    
  }
});

export default Loan;
