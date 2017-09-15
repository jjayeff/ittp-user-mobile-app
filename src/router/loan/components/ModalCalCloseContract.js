import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { TextModal } from '../../../components/common';
import { 
  DateFormat,
  Money, 
  calInterest, 
  calCloseContractFee, 
  calTotalContractFee, 
} from '../../../utils/base';
import { 
  BATH,
  DATE_CLOSE_CONTRACT,
  FINE,
  SAMMARY,
  CAL_CLOSE_CONTRACT,
  TOTAL_CLOSE_CONTRACT,
  TOTAL_AMOUNTS,
  INTERREST,
  HOW_MUCH_CLOSE_CONTRACT,
  DATE_OPEN_CONTRACT
} from '../../../texts';

class ModalCalCloseContract extends Component {
  state = { date: moment() };  
  render() {
    const { containerStyle, textStyle, HeadertextStyle, rowStyle } = styles;
    const {
      credit_limit: creditLimit,       
      daily_int,
      open_date,
      preterminated_fee,
      cf_principal: cfPrincipal,
      cf_interest: cfInterest,
      cf_fee: cfFee,
      trans_date,
    } = this.props.loan;
    const Interest = {
      Principal: cfPrincipal,
      interest: cfInterest,
      dailyInt: daily_int,
      transactionDate: trans_date,
      closeDate: this.state.date,
    };
    const CloseContractFee = {
      openDate: open_date,
      closeDate: this.state.date,
      preterminatedFee: preterminated_fee,
      creditLimit
    };
    const TotalContractFee = {
      CloseContractFee,
      Interest,
      principal: cfPrincipal,
      fee: cfFee,
    };  
    return (
    <ScrollView>
      <View style={containerStyle}>
        <TextModal>
          <Text style={HeadertextStyle}>{CAL_CLOSE_CONTRACT}</Text>
        </TextModal>
        <TextModal>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => { this.setState({ date }); }}
          />
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View>
              <Text style={textStyle}>{TOTAL_CLOSE_CONTRACT}</Text>
              <Text style={HeadertextStyle} >{Money(calTotalContractFee(TotalContractFee), true)} {BATH}</Text>         
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={textStyle}>{DATE_OPEN_CONTRACT}</Text>
              <Text style={HeadertextStyle} >{DateFormat(open_date)}</Text>         
            </View>
          </View>
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View>
              <Text style={textStyle}>{SAMMARY}</Text>
              <Text style={HeadertextStyle} >{TOTAL_AMOUNTS}</Text>
              <Text style={HeadertextStyle} >{INTERREST}</Text>
              <Text style={HeadertextStyle} >{FINE}</Text>
              <Text style={HeadertextStyle} >{HOW_MUCH_CLOSE_CONTRACT}</Text>            
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={textStyle}>{DATE_CLOSE_CONTRACT} {DateFormat(this.state.date)}</Text> 
              <View style={{ paddingRight: 40, paddingTop: 5 }}>
                <Text style={HeadertextStyle} >{Money(cfPrincipal, true)}</Text>        
                <Text style={HeadertextStyle} >{Money(calInterest(Interest), true)}</Text>        
                <Text style={HeadertextStyle} >{Money(cfFee, true)}</Text>        
                <Text style={HeadertextStyle} >{Money(calCloseContractFee(CloseContractFee), true)}</Text>        
              </View>
            </View>
          </View>
        </TextModal>
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
    paddingTop: 15,    
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  rowStyle: {
    flexDirection: 'row',  
    justifyContent: 'space-between',                    
    paddingRight: 5,
    paddingLeft: 5,
  },
  HeadertextStyle: {              
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: 15,
    paddingLeft: 10,
  },
  textStyle: {             
    color: 'steelblue',
    fontSize: 12,
    fontFamily: 'Cloud-Light',
    paddingLeft: 10,
  },
};

export default ModalCalCloseContract;
