import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Money } from '../../../utils/base';
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
  BATH,
} from '../../../texts';
import BarcodeListSaction from './BarcodeListSaction';
import { normalize } from '../../../utils/fontResponsive';

class BarcodeList extends Component {
  trcBank(trc) {
    switch (trc) {
      case CTBBL: {
        const transactionDetail = { name: BBL_NAME, icon: 'BBL' };
        return transactionDetail;
      }
      case BCBBL: {
        const transactionDetail = { name: BBL_NAME, icon: 'BBL' };
        return transactionDetail;
      }
      case CTGSB: {
        const transactionDetail = { name: GSB_NAME, icon: 'GSB' };
        return transactionDetail;
      }
      case BCGSB: {
        const transactionDetail = { name: GSB_NAME, icon: 'GSB' };
        return transactionDetail;
      }
      case CD: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP' };
        return transactionDetail;
      }
      case FIRST_TRANSACTION: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP' };
        return transactionDetail;
      }
      default: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP' };
        return transactionDetail;
      }
    }
  }
  renderComponent() {
    const { textStyle } = styles;
    return (
      <View style={{ paddingTop: 20 }}>
        <List>
          <ListItem
            roundAvatar
            title='การชำระล่าสุด'
            subtitle='(แสดงรายการชำระย้อนหลัง 90 วัน)'
            subtitleStyle={textStyle}
            fontFamily='Cloud-Light'
          />
          {
            this.props.transactions.map((item, i) => {
              const cash = item.cash_in ? `-${Money(item.cash_in)} ${BATH}` : `+${Money(item.cash_out)} บาท`;
              const trc = this.trcBank(item.trc);
              const transaction = {
                cash,
                trc,
                date: item.trans_date,
                check: item.cash_in,
                index: i,
                item
              };
              return (
                <BarcodeListSaction transaction={transaction} key={item.id} />
              );
            })
          }
        </List>
      </View>
    );
  }
  render() {
    return (
      <View showsButtons loop={false} style={{ width: '100%' }} >
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#989898',
    fontFamily: 'Cloud-Bold',
    fontSize: normalize(13)
  }
});

export default BarcodeList;
