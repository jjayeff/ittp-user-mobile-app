import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import BarcodeSummary from './BarcodeSummary';
import { Spinner } from '../../../components/common';

class Barcode extends Component {
  renderDetail() {
    const { containerStyle } = styles;   
    return this.props.loans.loanDb.map((loan) => 
      <View>
        <BarcodeSummary loan={loan} /> 
        <ScrollView key={loan.loan_id}>
          <View style={containerStyle}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Image
                style={{ width: '100%', height: 100, }}
                source={require('../../../../store/image/barcode-test.png')}      
              />
            </View>
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
    flexDirection: 'column',   
    justifyContent: 'space-between',   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Barcode;
