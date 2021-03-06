import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import BarcodeSummary from './BarcodeSummary';
import BarcodeImage from './BarcodeImage';
import BarcodeList from './BarcodeList';
import { Spinner } from '../../../components/common';

class Barcode extends Component {
  renderDetail() {
    const { containerStyle } = styles;
    const { loans, transactions } = this.props;
    return loans.loanDb.map((loan, index) =>
      <View style={containerStyle} key={loan.loan_id}>
        <ScrollView>
          <View style={{ paddingBottom: 40 }}>
            <BarcodeSummary loan={loan} num={this.props.loans.loanDb.length} index={index} />
            <BarcodeImage loanId={loan.loan_id} />
            <BarcodeList transactions={transactions.transaction90Db[index]} loan={loan} />
          </View>
        </ScrollView>
      </View>
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
    flex: 1,
    paddingBottom: 40,
  }
});

export default Barcode;
