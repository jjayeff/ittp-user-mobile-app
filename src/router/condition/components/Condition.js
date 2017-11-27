import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const list = [
  {
    id: 1,
    title: 'เงื่อนไขการให้บริการแอพพลิเคชั่น ITTP',
    detail: 'เงื่อนไขการให้บริการนี้เป็นข้อตกลงระหว่าง "บริษัท" ฝ่ายหนึ่ง กับ "ผู้ใช้บริการ" อีกฝ่ายหนึ่ง เพื่อใช้บริการแอพพลิเคชั่น ITTP ซึ่งต่อไปนี้จะเรียกว่า "บริการ" โดยผู้ใช้ บริการสามารถทำธุรกรรมการเงิน ตามรายละเอียดที่ปรากฎในเงื่อนไขการให้บริการแอพพลิเคชั่น ITTP ซึ่งต่อไปนี้จะเรียกว่า "เงื่อนไขการให้บริการ" โดยเงื่อนไขการให้บริการนี้อาจลักษณะกระทบสิทธิของผู้ใช้บริการ ซึ่งผู้ใช้บริการควรอ่านและทำความเข้าใจอย่างละเอียดและหากมีข้อสงสัยเกี่ยวกับบริการของบริษัทผู้ใช้บริการสามารถติดต่อสอบถามได้โดยทันที'
  },
  {
    id: 2,
    title: '1. ข้อกำหนดทั่วไป',
    detail: '1.1 ผู้ใช้บริการตกลงที่จะปฏิบัติและผูกพันตามเงื่อนไขการใช้บริการ ซึ่งการใช้บริการของผู้ใช้บริการถือเป็นการยอมรับเงื่อนไขการให้บริการนี้ โดยบริษัทอาจแก้ไขหรือเพิ่มเติมเงื่อนไขการให้บริการได้ไม่ว่าในเวลาใดโดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบลวงหน้า และการที่ผู้ใช้บริการใช้บริการต่อไปภายหลังจากที่มีการแก้ไขหรือเพิ่มเติมดังกล่าว ย่อมถือเป็นการยอมรับการแก้ไขในแต่ละครั้ง\n\n1.2 เว้นแต่จะได้มีการแจ้ง หรือกำหนดไว้เป็นอย่างอื่น คุณลักษณะใหม่ๆ ที่ได้เพิ่มเติม ปรับปรุง หรือแก้ไขในบริการให้ถือว่าอยู่ภายใต้เงื่อนไขการให้บริการฉบับนี้ทั้งสิ้น\n\n1.3 บริษัทสงวนสิทธิ์ในการปรับปรุง หรือยกเลิกการบริการหรือส่วนใดส่วนหนึ่งของบริการ ไม่ว่าจะเป็นการชั่วคราว หรือ ตลอดไปได้ตลอดเวลาโดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า'
  },
];

class Condition extends Component {
  static defaultProps = {
    doAnimateZoomReset: false,
    maximumZoomScale: 2,
    minimumZoomScale: 1,
  }
  setZoomRef = node => {
    if (node) {
      this.zoomRef = node;
      this.scrollResponderRef = this.zoomRef.getScrollResponder();
    }
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView
          maximumZoomScale={this.props.maximumZoomScale}
          minimumZoomScale={this.props.minimumZoomScale}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={this.setZoomRef} //helps us get a reference to this ScrollView instance
        >
          <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View>
              {
                list.map((u) => {
                  return (
                    <View key={u.id}>
                      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>{u.title}</Text>
                      <Text style={{ marginBottom: 20 }}>{u.detail}</Text>                    
                    </View>
                  );
                })
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Condition;

