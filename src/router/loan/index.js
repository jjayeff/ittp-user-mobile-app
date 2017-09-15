import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Loan from './containers/Loan';
import { LOAN } from '../../texts';

const Loans = () => {
  const { loanStyle } = styles;
  return (
    <View style={loanStyle}>
      <Header headerText={LOAN} />
      <Loan />
      <Bottom selectedTab={LOAN} />      
    </View>
  );
};

const styles = StyleSheet.create({
  loanStyle: {
    backgroundColor: '#FFFFFF',          
    flex: 1,
    flexDirection: 'column',
  },
});

export default Loans;
