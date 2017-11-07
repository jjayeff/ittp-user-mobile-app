import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import AddressSummary from './AddressSummary';
import AddressList from './AddressList';
import { Spinner } from '../../../components/common';

class Address extends Component {
  renderDetail() {
    const { containerStyle } = styles;
    return this.props.loans.loanDb.map((loan, index) =>
      <ScrollView key={loan.loan_id}>
        <View style={containerStyle}>
          <View style={{ height: 200 }}>
            <AddressSummary loan={loan} num={this.props.loans.loanDb.length} index={index} />
          </View>
          <AddressList />
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
  containerStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Address;

