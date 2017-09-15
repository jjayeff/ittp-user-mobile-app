import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EtcHistory from './EtcHistory';
import EtcBarcode from './EtcBarcode';
import EtcMe from './EtcMe';
import EtcContact from './EtcContact';

class EtcHome extends Component {
  render() {
    const { containerStyle, textStyle } = styles;
    const { history, barcode, me } = this.props.onPress;
    return (
      <View>
        <Text style={textStyle}>เมนูลัด</Text>
        <View style={containerStyle}>
          <EtcHistory onPress={history} /> 
          <EtcBarcode onPress={barcode} />
          <EtcMe onPress={me} />    
          <EtcContact />     
        </View>                                        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {    
    paddingBottom: 10,     
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  textStyle: {
    paddingLeft: 13,    
    fontSize: 25,
    fontFamily: 'Cloud-Bold',
    alignItems: 'center',
    color: '#3363ad',
  },
});

export default EtcHome;
