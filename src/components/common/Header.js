import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Header extends Component {
  onPressLogOut() {
    Actions.login();
  }
  render() {
    const { headerText } = this.props;
    const { headerStyle, textStyle } = styles;
     return (
      <View style={headerStyle}>
        <View style={{ width: 20, height: 20 }} />     
          <Text style={textStyle}> {headerText} </Text>   
        <View style={{ width: 20, height: 20 }} />                     
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',            
    alignItems: 'center',    
    height: 60,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: 'steelblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row',
    backgroundColor: '#4d9edd'
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Cloud-Light', 
  }
});


export { Header };
