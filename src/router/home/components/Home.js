import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CID } from '../../../../config';
import News from './News';
import HeaderHome from './HeaderHome';
import LoanHome from './LoanHome';
import CardHome from './CardHome';
import { Spinner } from '../../../components/common';

class Home extends Component {
  componentDidMount() {
    this.props.fetchLoansCID(CID);
    this.props.fetchTransactionsCID(CID);
  }
  onPressLoan() {
    Actions.loans();
  }
  onPressHistory() {
    Actions.history();
  }
  onPressBarcode() {
    Actions.barcode();
  }
  onPressMe() {
    Actions.me();
  }
  onPressProduct() {
    Actions.product();
  }
  onPressContact() {
    Actions.contact();
  }
  onPressQuestion() {
    Actions.question();
  }
  onPressChannel() {
    Actions.channel();
  }
  onPressPlace() {
    Actions.place();
  }
  renderComponents() {
    const { containerStyle } = styles;
    let total = 0;
    const { firstname, lastname } = this.props.loans.loanDb[0];
    this.props.loans.loanDb.map(loan => total += loan.cf_principal);
    const onPress = {
      history: this.onPressHistory,
      barcode: this.onPressBarcode,
      product: this.onPressProduct,
      contact: this.onPressContact,
      question: this.onPressQuestion,
      channel: this.onPressChannel,
      place: this.onPressPlace,
    };
    return (
      <View style={containerStyle}>
        <News />
        <HeaderHome firstname={firstname} lastname={lastname} onPress={this.onPressMe} />
        <LoanHome onPress={this.onPressLoan} num={this.props.loans.loanDb.length} total={total} />
        <CardHome onPress={onPress} />
      </View>
    );
  }
  render() {
    if (this.props.loans.loading) {
      return (
        <ScrollView>
          {this.renderComponents()}
        </ScrollView>
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
    flexDirection: 'column',
    paddingBottom: 30,
  },
  circleStyle: {
    borderRadius: 15,
    width: '32%',
    height: 120,
    backgroundColor: '#153d8a',
  },
  ImageStyle: {
    width: '97%',
    height: 160,
  },
});

export default Home;
