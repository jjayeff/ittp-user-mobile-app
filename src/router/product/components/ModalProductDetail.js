import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { TextModal } from '../../../components/common';
import { normalize } from '../../../utils/fontResponsive';
import { NAME_PRODUCT, CONDITION } from '../../../texts';

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
                  <Text style={textStyle}>{NAME_PRODUCT}</Text>
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
                <Text style={HeadertextStyle}>{CONDITION} {title}</Text>
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
    fontSize: normalize(17),
    paddingLeft: 10,
  },
  headerCentertextStyle: {
    color: '#153d8a',
    fontFamily: 'Cloud-Light',
    fontSize: normalize(18),
    paddingLeft: 10,
    alignSelf: 'center'
  },
  textStyle: {
    color: 'steelblue',
    fontFamily: 'Cloud-Light',
    fontSize: normalize(14),
    paddingLeft: 10,
  },
};

export default ModalProductDetail;
