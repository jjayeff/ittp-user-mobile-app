import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { ModalComponent } from '../../../components/common';
import { MIN_DUE, DUE_DATE, BATH, CLICK_DETAIL, LOAN_CLOSED, CLOSED_LOAN } from '../../../texts';
import { DateFormat, Money } from '../../../utils/base';
import ModalLoanDetail from './ModalLoanDetail';
import { normalize } from '../../../utils/fontResponsive';

class LoanDetail extends Component {
  state = {
    isModalVisible: false
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  renderAmount(minDue, trc) {
    if (trc !== LOAN_CLOSED) {
      return (
        <Text style={styles.textHeadStyle}>
          {Money(minDue)} {BATH}
        </Text>
      );
    }
    return (
      <Text style={styles.textHeadStyle}>
        {CLOSED_LOAN}
      </Text>
    );
  }
  renderDate(dueDate, trc) {
    if (trc !== 'PO') {
      return (
        <Text style={styles.textHeadStyle}>
          {DateFormat(dueDate)}
        </Text>
      );
    }
    return (
      <Text style={styles.textHeadStyle}>
        -
      </Text>
    );
  }
  render() {
    const {
      loanDetailContainerStyle,
      circleStyle,
      innerCircle,
      outerCircle,
      inCircleStyle,
      textHeadStyle,
      textStyle,
      textDetail,
      pageStyle
    } = styles;
    const { due_date, min_due, trc } = this.props.loan;
    const { index, num } = this.props;
    return (
      <View style={loanDetailContainerStyle}>
        <View style={circleStyle}>
          <View style={outerCircle}>
            <View style={innerCircle}>
              <TouchableWithoutFeedback onPress={this.showModal}>
                <View style={inCircleStyle}>
                  <Text style={pageStyle}>{index + 1}/{num}</Text>
                  <Image
                    source={require('../../../../store/image/ITTP.jpg')}
                    style={{ width: 90, height: 30 }}
                  />
                  <Text style={textStyle}>
                    {(MIN_DUE)}
                  </Text>
                  {this.renderAmount(min_due, trc)}
                  <Text style={textStyle}>
                    {DUE_DATE}
                  </Text>
                  {this.renderDate(due_date, trc)}
                  <Text style={textDetail}>
                    {CLICK_DETAIL}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={{ flex: 1, height: 100 }}>
            <ModalComponent onPress={this.hideModal} Modal={() => <ModalLoanDetail loan={this.props.loan} />} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loanDetailContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  circleStyle: {
    flex: 1,
    alignItems: 'center',
  },
  inCircleStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: normalize(17),
    fontFamily: 'Cloud-Light',
    alignItems: 'center',
    paddingTop: 10,
    color: 'steelblue',
  },
  pageStyle: {
    fontSize: normalize(18),
    fontFamily: 'Cloud-Light',
    alignItems: 'center',
    paddingBottom: 5,
    color: 'steelblue',
  },
  textHeadStyle: {
    fontSize: normalize(19),
    fontFamily: 'Cloud-Light',
    alignItems: 'center',
    color: '#153d8a',
  },
  textDetail: {
    fontSize: normalize(16),
    fontFamily: 'Cloud-Light',
    alignItems: 'center',
    color: 'red',
    textDecorationLine: 'underline',
    paddingTop: 10
  },
  outerCircle: {
    borderRadius: 140,
    width: 280,
    height: 280,
    backgroundColor: '#153d8a',
  },
  innerCircle: {
    borderRadius: 140,
    width: 275,
    height: 275,
    margin: 2.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoanDetail;
