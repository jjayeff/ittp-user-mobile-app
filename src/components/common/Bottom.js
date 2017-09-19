import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { HOME, ME, LOAN, HISTORY, BARCODE } from '../../texts';
import { normalize } from '../../utils/fontResponsive';

class Bottom extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'null',
    };
    this.onPressHome = this.onPressHome.bind(this);
    this.onPressLoan = this.onPressLoan.bind(this);
    this.onPressHistory = this.onPressHistory.bind(this);
    this.onPressBarcode = this.onPressBarcode.bind(this);
    this.onPressMe = this.onPressMe.bind(this);    
  }
  componentDidMount() {
    this.setState({ selectedTab: this.props.selectedTab });
  }
  onPressHome() {
    Actions.home();
  }
  onPressLoan() {  
    Actions.loans();
  }
  onPressHistory() {
    Actions.history();
  }
  onPressBarcode() {     
    Actions.barcode();
  }
  onPressMe() {    
    Actions.me();
  }
  render() {
    const { iconStyle, bottomStyle, textStyle, textSelectedStyle } = styles;
    const { selectedTab } = this.state;
    return (
      <View style={bottomStyle}>  
        <TouchableOpacity onPress={this.onPressHome}>
          <View style={iconStyle}>
            <Icon
              name='home'
              color={selectedTab === HOME ? '#366dc0' : '#989898'}
            />
            <Text style={selectedTab === HOME ? textStyle : textSelectedStyle}>{HOME}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressLoan}>        
          <View style={iconStyle}>      
          <Icon
            name='email'
            color={selectedTab === LOAN ? '#366dc0' : '#989898'}
          />
            <Text style={selectedTab === LOAN ? textStyle : textSelectedStyle}>{LOAN}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressHistory}>                       
          <View style={iconStyle}>
            <Icon
              name='format-list-bulleted'
              color={selectedTab === HISTORY ? '#366dc0' : '#989898'}
            />
            <Text style={selectedTab === HISTORY ? textStyle : textSelectedStyle}>{HISTORY}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressBarcode}>   
          <View style={iconStyle}> 
            <Icon
              name='credit-card'
              color={selectedTab === BARCODE ? '#366dc0' : '#989898'}
            />
            <Text style={selectedTab === BARCODE ? textStyle : textSelectedStyle}>{BARCODE}</Text>        
          </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={this.onPressMe}>   
          <View style={iconStyle}> 
            <Icon
              name='account-box'
              color={selectedTab === ME ? '#366dc0' : '#989898'}
            />
            <Text style={selectedTab === ME ? textStyle : textSelectedStyle}>{ME}</Text>        
          </View>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomStyle: {
    justifyContent: 'space-between',            
    alignItems: 'center',    
    height: 45,
    paddingRight: 25,
    paddingLeft: 25,
    shadowColor: 'steelblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  iconStyle: {        
    justifyContent: 'center',                
    alignItems: 'center',    
    flexDirection: 'column',
  },
  textStyle: {        
    fontSize: normalize(14),    
    fontFamily: 'Cloud-Light',   
    alignItems: 'center',   
    color: '#366dc0',
  },
  textSelectedStyle: {        
    fontSize: normalize(14),    
    fontFamily: 'Cloud-Light',   
    alignItems: 'center',   
    color: '#989898',
  },
});


export { Bottom };
