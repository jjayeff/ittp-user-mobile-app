import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import TransactionSummary from './TransactionSummary';
import TransactionList from './TransactionList';

class Transaction extends Component {
  renderDetail() {
    const { loanStyle } = styles;
    const { loans, transactions } = this.props;
    return loans.loanDb.map((loan, index) =>
      <View style={loanStyle} key={loan.loan_id}>
        <ScrollView>
          <TransactionSummary loan={loan} num={this.props.loans.loanDb.length} index={index} />
          <TransactionList transactions={transactions.transactionDb[index]} loan={loan} />
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <Swiper showsButtons loop={false} >
        {this.renderDetail()}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  loanStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 40,
  },
});

export default Transaction;
