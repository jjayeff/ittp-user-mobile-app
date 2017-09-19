import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { ModalComponent } from '../../../components/common';
import ModalProductDetail from './ModalProductDetail';

class CardProductSaction extends Component {
  state = {
    isModalVisible: false,
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });
  render() {
    const { title, image, subtitle } = this.props.data;
    return (
      <View style={{ width: '100%' }}>
        <Card
          title={title}
          image={image}
          imageStyle={{ width: 140, height: 140, alignSelf: 'center' }}
          fontFamily='Cloud-Light'
        >
          <Text style={{ marginBottom: 10, fontFamily: 'Cloud-Light', alignSelf: 'center' }}>
            {subtitle}
          </Text>
          <Button
            onPress={this.showModal}
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            fontFamily='Cloud-Light'
            buttonStyle={{ borderRadius: 25, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='ดูรายละเอียด'
          />
        </Card>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={{ flex: 1, height: 100 }}>
            <ModalComponent
              onPress={this.hideModal} 
              Modal={() => <ModalProductDetail data={this.props.data} />} 
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default CardProductSaction;
