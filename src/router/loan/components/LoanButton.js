import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { ModalComponent } from '../../../components/common';
import { CAL_CLOSE_CONTRACT, STATEMENT } from '../../../texts';
import ModalCalCloseContract from './ModalCalCloseContract';

class LoanButton extends Component {
  state = {
    isModalVisible: false
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  render() {
    const { loanSummaryContainerStyle } = styles;
    return (
      <View style={loanSummaryContainerStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Button
            icon={{ name: 'library-books' }}
            title={STATEMENT}
            fontFamily='Cloud-Light'
            backgroundColor='#153d8a'
            buttonStyle={{ borderRadius: 25 }}
          />    
          <Button 
            onPress={this.showModal}
            icon={{ name: 'cached' }}          
            title={CAL_CLOSE_CONTRACT}  
            fontFamily='Cloud-Light'   
            backgroundColor='#153d8a'
            buttonStyle={{ borderRadius: 25 }}            
          />
        </View>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={{ flex: 1, height: 100 }}>
            <ModalComponent onPress={this.hideModal} Modal={() => <ModalCalCloseContract loan={this.props.loan} />} />
          </View>
        </Modal>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loanSummaryContainerStyle: {       
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'space-between',       
    paddingTop: 5, 
  },
});

export default LoanButton;
