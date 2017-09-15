import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { TextModal } from '../../../components/common';
import { DateFormat, Money } from '../../../utils/base';
import { 
  MIN_DUE, 
  DUE_DATE, 
  BATH,
  SUMMARY_STATEMENT,
  CREDIT_LIMIT,
  BF_PRINCIPAL,
  CF_PRINCIPAL,
  PAY,
  DATE_TANSACTION,
  FINE,
  INTERREST_LAST,
  TOTAL_AMOUNT,
  SAMMARY,
  BAD_PAY,
  MIN_DUE_LAST,
  FINE_LAST,
  TOTAL,
} from '../../../texts';

class ModalLoanDetail extends Component {
  render() {
    const { containerStyle, textStyle, HeadertextStyle, rowStyle } = styles;
    const { 
      due_date, 
      min_due, 
      bf_principal, 
      cf_principal, 
      credit_limit, 
      trans_date 
    } = this.props.loan;        
    return (
    <ScrollView>
      <View style={containerStyle}>
        <TextModal>
          <Text style={HeadertextStyle}>{SUMMARY_STATEMENT}</Text>
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View >
              <Text style={textStyle}>{MIN_DUE}</Text>
              <Text style={HeadertextStyle} >{Money(min_due)} {BATH}</Text>         
            </View>
            <View>
              <Text style={textStyle}>{DUE_DATE}</Text> 
              <Text style={HeadertextStyle} >{DateFormat(due_date)}</Text>        
            </View>
          </View>
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View >
              <Text style={textStyle}>{CREDIT_LIMIT}</Text>
              <Text style={HeadertextStyle} >{Money(credit_limit)} {BATH}</Text>         
            </View>
            <View>
              <Text style={textStyle}>{BF_PRINCIPAL}</Text> 
              <Text style={HeadertextStyle} >{Money(bf_principal)} {BATH}</Text>        
            </View>
            <View>
              <Text style={textStyle}>{CF_PRINCIPAL}</Text> 
              <Text style={HeadertextStyle} >{Money(cf_principal)} {BATH}</Text>        
            </View>
          </View>
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View>
              <Text style={textStyle}>{PAY}</Text>
              <Text style={HeadertextStyle} >{FINE}</Text>
              <Text style={HeadertextStyle} >{INTERREST_LAST}</Text>
              <Text style={HeadertextStyle} >{TOTAL_AMOUNT}</Text>
              <Text style={HeadertextStyle} >{TOTAL}</Text>            
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={textStyle}>{DATE_TANSACTION} {DateFormat(trans_date)}</Text> 
              <View style={{ paddingRight: 40 }}>
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
              </View>
            </View>
          </View>
        </TextModal>
        <TextModal>
          <View style={rowStyle}>
            <View>
              <Text style={textStyle}>{SAMMARY}</Text>
              <Text style={HeadertextStyle} >{BAD_PAY}</Text>
              <Text style={HeadertextStyle} >{MIN_DUE_LAST}</Text>
              <Text style={HeadertextStyle} >{FINE_LAST}</Text>
              <Text style={HeadertextStyle} >{TOTAL}</Text>            
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={textStyle}>{DATE_TANSACTION} {DateFormat(trans_date)}</Text> 
              <View style={{ paddingRight: 40 }}>
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
                <Text style={HeadertextStyle} >0.00</Text>        
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
    fontFamily: 'Cloud-Light',
    fontSize: 12,
    paddingLeft: 10,
  },
};

export default ModalLoanDetail;
