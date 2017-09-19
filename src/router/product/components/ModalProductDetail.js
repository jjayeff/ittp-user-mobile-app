import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { TextModal } from '../../../components/common';
import { DateFormat, Money } from '../../../utils/base';
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
} from '../../../texts';

class ModalProductDetail extends Component {
  renderComponents() {
    const { textStyle } = styles;
    const { Detail } = this.props.data;
    return (
      <View>
        {
          Detail.map((item, i) => (
            <Text key={i} style={textStyle}>{item}</Text>
          ))
        }
      </View>
    );
  }
  render() {
    const { containerStyle, HeadertextStyle, textStyle, rowStyle } = styles;
    const { title, imageDetail, titleDetail } = this.props.data;
    return (
      <ScrollView>
        <View style={containerStyle}>
          <View style={{ paddingTop: 50 }}>
            <TextModal>
              <TextModal>
                <View style={rowStyle}>
                  <Text style={textStyle}>ชื่อประเภทสินเชื่อ</Text>
                </View>
                <View style={rowStyle}>
                  <Text style={HeadertextStyle}>{titleDetail}</Text>
                </View>
              </TextModal>
              <Image
                style={{ width: '100%', height: 180, alignSelf: 'center' }}
                source={imageDetail}
              />
            </TextModal>
            <TextModal>
              <View style={rowStyle}>
                <Text style={HeadertextStyle}>เงื่อนไขการสมัคร {title}</Text>
              </View>
              <View style={{ paddingRight: 7, paddingLeft: 7 }}>
                {this.renderComponents()}
              </View>
            </TextModal>
          </View>
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
    paddingRight: 7,
    paddingLeft: 7,
  },
  HeadertextStyle: {
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: 17,
    paddingLeft: 10,
  },
  headerCentertextStyle: {
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  textStyle: {
    color: 'steelblue',
    fontFamily: 'Cloud-Light',
    fontSize: 14,
    paddingLeft: 10,
  },
};

export default ModalProductDetail;
