import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-elements';
import { Money } from '../../../utils/base';
import {
  CTBBL,
  CTGSB,
  BCBBL,
  BCGSB,
  CD,
  LOAN_OPENED,
  LOAN_CLOSED,
  BBL_NAME,
  GSB_NAME,
  ITTP_NAME,
  BATH,
  CLOSED_LOAN,
  OPENED_LOAN
} from '../../../texts';
import TransactionListSaction from './TransactionListSaction';

class TransactionList extends Component {
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
      default: {
        const transactionDetail = { name: ITTP_NAME, icon: 'ITTP' };
        return transactionDetail;
      }
    }
  }
  renderComponent() {
    return (
      <List>
        {
          this.props.transactions.map((item, i) => {
            let cash = '';
            switch (item.trc) {
              case
                LOAN_CLOSED: cash = CLOSED_LOAN; break;
              case
                LOAN_OPENED: cash = OPENED_LOAN; break;
              default:
                cash = item.cash_in ? `-${Money(item.cash_in)} ${BATH}` : `+${Money(item.cash_out)} ${BATH}`;
            }
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
              <TransactionListSaction transaction={transaction} key={item.id} />
            );
          })
        }
      </List>
    );
  }
  render() {
    return (
      <View
        showsButtons loop={false}
        style={{ width: '100%' }}
      >
        {this.renderComponent()}
      </View>
    );
  }
}

export default TransactionList;
