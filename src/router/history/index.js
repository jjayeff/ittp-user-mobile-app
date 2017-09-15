import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Transaction from './containers/Transaction';
import { HISTORY } from '../../texts';

const History = () => {
  const { historyStyle } = styles;
  return (
    <View style={historyStyle}>
      <Header headerText={HISTORY} />
      <Transaction />
      <Bottom selectedTab={HISTORY} />      
    </View>
  );
};

const styles = StyleSheet.create({
  historyStyle: {
    backgroundColor: '#e6eaed',          
    flex: 1,
    flexDirection: 'column',
  },
});

export default History;
