import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { ModalComponent } from '../../../components/common';
import { MIN_DUE, DUE_DATE, BATH } from '../../../texts';
import { DateFormat, Money } from '../../../utils/base';
import ModalLoanDetail from './ModalLoanDetail';

class LoanDetail extends Component {
  state = {
    isModalVisible: false
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
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
    const { due_date, min_due } = this.props.loan;    
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
                    <Text style={textHeadStyle}>
                      {Money(min_due)} {BATH}
                    </Text>
                    <Text style={textStyle}>
                      {DUE_DATE}
                    </Text>
                    <Text style={textHeadStyle}>
                      {DateFormat(due_date)}
                    </Text>
                    <Text style={textDetail}>
                      ดูรายละเอียด
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
    fontSize: 17,
    fontFamily: 'Cloud-Light',
    alignItems: 'center',
    paddingTop: 10,     
    color: 'steelblue',            
  },
  pageStyle: {
    fontSize: 18,
    fontFamily: 'Cloud-Light',    
    alignItems: 'center',
    paddingBottom: 5,     
    color: 'steelblue',            
  },
  textHeadStyle: {
    fontSize: 19,       
    fontFamily: 'Cloud-Light',    
    alignItems: 'center',    
    color: '#153d8a',        
  },
  textDetail: {
    fontSize: 16,       
    fontFamily: 'Cloud-Light',    
    alignItems: 'center',    
    color: 'red',        
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
