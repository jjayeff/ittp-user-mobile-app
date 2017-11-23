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
  LOAN_OPENED,
  LOAN_CLOSED,
  BBL_NAME,
  GSB_NAME,
  ITTP_NAME,
  AMOUNT,
  HOW_TO_PAY,
  DATE_TRANSACTION,
  TRAN_BANK,
  TRAN_ITTP,
  TRAN_FROM_ITTP,
  TRAN_OPEN_ITTP,
  CLOSED_LOAN
} from '../../../texts';
import { normalize } from '../../../utils/fontResponsive';

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
      default:
        return (
          <View style={rowStyle}>
            <Image
              style={{ width: 45, height: 45 }}
              source={require('../../../../store/image/banks/ittp.png')}
            />
            <Text style={headerCentertextStyle}>{ITTP_NAME}</Text>
          </View>
        );
    }
  }
  renderMoney(trc) {
    const { HeadertextStyle, rowStyle } = styles;
    const {
      cash_in,
      cash_out,
    } = this.props.transaction;
    switch (trc) {
      case CD: {
        return (
          <View style={rowStyle}>
            <Text style={HeadertextStyle}>{Money(cash_in)}</Text>
            <Text style={HeadertextStyle}>{TRAN_ITTP}</Text>
          </View>
        );
      }
      case FIRST_TRANSACTION: {
        return (
          <View style={rowStyle}>
            <Text style={HeadertextStyle}>{Money(cash_out)}</Text>
            <Text style={HeadertextStyle}>{TRAN_FROM_ITTP}</Text>
          </View>
        );
      }
      case LOAN_OPENED: {
        return (
          <View style={rowStyle}>
            <Text style={HeadertextStyle}>{Money(cash_out)}</Text>
            <Text style={HeadertextStyle}>{TRAN_OPEN_ITTP}</Text>
          </View>
        );
      }
      case LOAN_CLOSED: {
        return (
          <View style={rowStyle}>
            <Text style={HeadertextStyle}>{Money(cash_out)}</Text>
            <Text style={HeadertextStyle}>{CLOSED_LOAN}</Text>
          </View>
        );
      }
      default:
        return (
          <View style={rowStyle}>
            <Text style={HeadertextStyle}>{Money(cash_in)}</Text>
            <Text style={HeadertextStyle}>{TRAN_BANK}</Text>
          </View>
        );
    }
  }
  render() {
    const { containerStyle, HeadertextStyle, textStyle, rowStyle } = styles;
    const {
      trans_date,
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
                <Text style={textStyle}>{AMOUNT}</Text>
                <Text style={textStyle}>{HOW_TO_PAY}</Text>
              </View>
              {this.renderMoney(trc)}
            </TextModal>
            <TextModal>
              <View style={rowStyle}>
                <Text style={textStyle}>{DATE_TRANSACTION}</Text>
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
    fontSize: normalize(17),
    paddingLeft: 10,
  },
  headerCentertextStyle: {
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: normalize(18),
    paddingLeft: 10,
    alignSelf: 'center'
  },
  textStyle: {
    color: 'steelblue',
    fontFamily: 'Cloud-Light',
    fontSize: normalize(14),
    paddingLeft: 10,
  },
};

export default ModalTransactionDetail;
