import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { TextModal } from '../../../components/common';
import { DateFormat, Money } from '../../../utils/base';
import { 
  CTBBL,
  CTGSB,
  BCBBL,
  BCGSB,
  CD,
  FIRST_TRANSACTION,
  BBL_NAME,
  GSB_NAME,
  ITTP_NAME,
} from '../../../texts';

class ModalTransactionDetail extends Component {
  renderBankComponent(trc) {
    const { headerCentertextStyle, rowStyle } = styles;
    switch (trc) {
      case CTBBL: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/bbl.png')}
            />
            <Text style={headerCentertextStyle}>{BBL_NAME}</Text>
          </View>
        );
      }
      case BCBBL: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/bbl.png')}
            />
            <Text style={headerCentertextStyle}>{BBL_NAME}</Text>
          </View>
        );
      }
      case CTGSB: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/gsb.png')}
            />
            <Text style={headerCentertextStyle}>{GSB_NAME}</Text>
          </View>
        );
      }
      case BCGSB: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/gsb.png')}
            />
            <Text style={headerCentertextStyle}>{GSB_NAME}</Text>
          </View>
        );
      }
      case CD: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/ittp-icon.png')}
            />
            <Text style={headerCentertextStyle}>{ITTP_NAME}</Text>
          </View>
        );
      }
      case FIRST_TRANSACTION: {
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/ittp-icon.png')}
            />
            <Text style={headerCentertextStyle}>{ITTP_NAME}</Text>
          </View>
        );
      }
      default:
        return <Text>{trc}</Text>;
    }
  }
  render() {
    const { containerStyle, HeadertextStyle, textStyle, rowStyle } = styles;
    const { 
      trans_date,
      cash_in,
      trc
    } = this.props.transaction;
    return (
    <ScrollView>
      <View style={containerStyle}>
        <View style={{ paddingTop: 50 }}>
          <TextModal>
            {this.renderBankComponent(trc)}
          </TextModal>
          <TextModal>
            <View style={rowStyle}>
              <Text style={textStyle}>จำนวนเงิน</Text>
              <Text style={textStyle}>วิธีการชำระ</Text>
            </View>
            <View style={rowStyle}>
              <Text style={HeadertextStyle}>{Money(cash_in)}</Text>
              <Text style={HeadertextStyle}>โอนผ่านบัญชีธนาคาร</Text>
            </View>
          </TextModal>
          <TextModal>
            <View style={rowStyle}>
              <Text style={textStyle}>วันเวลาที่ทำรายการ</Text>
            </View>
            <View style={rowStyle}>
              <Text style={HeadertextStyle}>{DateFormat(trans_date)}</Text>
            </View>
          </TextModal>
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',    
    justifyContent: 'space-between',                
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  rowStyle: {
    flexDirection: 'row',  
    justifyContent: 'space-between',                    
    paddingRight: 7,
    paddingLeft: 7,
  },
  HeadertextStyle: {              
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: 17,
    paddingLeft: 10,
  },
  headerCentertextStyle: {              
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  textStyle: {             
    color: 'steelblue',
    fontFamily: 'Cloud-Light',
    fontSize: 14,
    paddingLeft: 10,
  },
};

export default ModalTransactionDetail;
