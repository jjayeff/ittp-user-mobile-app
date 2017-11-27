import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const policy = [
  {
    id: 1,
    title: 'นโยบายการคุ้มครองข้อมูลส่วนบุลคล',
    detail: 'บริษัท ไอทีทีพี จำกัด ตระหนักถึงความสำคัญเรื่องการคุ้มครองข้อมูลส่วนบุคคลของท่านบริษัทจึได้เลือกใช้เทคโนโลยีที่ทันสมัยและความปลอดภัยตามมาตราฐานสากลรวมทั้งทดสอบและปรับปรุงประสิทธิภาพของระบบอย่างสม่ำเสมอเพื่อเพิ่มความมั่นใจให้ท่านสามารถใช้บริการแอพพลิเคชั่น ITTP'
  },
  {
    id: 2,
    title: 'การรักษาข้อมูลและการใช้ข้อมูล',
    detail: 'บริษัทจะจัดเก็บข้อมูลส่วนบุคคลของท่านตลอดระยยเวลาที่ท่านใช้บริการแอพพลิเคชั่น ITTP หรือตามระยะเวลาที่บริษัทกำหนด โดยบริษัทกำหนดโดยบริษัทอาจะใช้ข้อมูลส่วนบุคคลของท่านเพื่อยืนยันตัวตนในการทำธรุกรรมทางการเงิน, เพื่ออนุญาตให้ท่านเข้าถึงข้อมูลที่มีลักษณะพิเศษ,เพื่อใช้การ ทำธุรกรรมทางการเงินที่เกี่ยวข้องกับบุคคลภายนอก หรือเพื่อให้บริษัทสามารถดำเนินการอื่นใดที่เกี่ยวข้องกับการใช้บริการแอพพลิเคชั่น ITTP ของท่าน รวมถึงใช้ ในการติดต่อกับท่านในกรณีที่จำเป็น และในบางกรณีที่บริษัทไม่สามารถทำการตรวจสอบตัวตนของท่านจากข้อมูลที่ท่านให้ไว้กับบริษัท บริษัทอาจร้องขอเอกสารเพิ่มเติม หรือสอบถามข้อมูลเพิ่มเติมจากท่านผ่านเจ้าหน้าที่ของบริษัท\n\nในกรณีที่ข้อมูลส่วนบุคคล หรือข้อมูลที่เกี่ยวข้องของท่านถูกจารกรรมทางคอมพิวเตอร์(Hack) บริษัทขอสงวนสิทธิ์ที่จะปฏิเสธความรับผิดใดๆ อันเป็นผลมาจากการดังกล่าว\n\nอนึ่งการใช้บริการแอพพลิเคชั่น ITTP ของท่านถือเป็นการยอมรับนโยบายการคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ โดยบริษัทอาจแก้ไขหรือเพิ่มเติมนโยบายคุ้มครองข้อมูลส่วนบุคคุลฉบับนี้ได้ไม่ว่าในเวลาใด และการที่ ท่านใช้งานแอพพลิเคชั่นอย่างต่อเนื่องภายหลังจากที่มีการ ประกาศแก้ไขหรือเพิ่มเติมดังกล่าว ย่อมถือเป็นการยอมรับ การแก้ไขแต่ละครั้ง ทั้งนี้ หากท่านมีข้อสงสัยเพิ่มเติมท่านสามารถติดต่อกับเจ้าหน้าที่ของบริษัทได้ทันที'
  },
  {
    id: 3,
    title: 'การเปิดเผลข้อมูลแก่บุคคลที่สาม',
    detail: 'นอกเหนือจากความยิมยอมให้เปิดเผยข้อมูลของผู้ใช้บริการที่กำหนดไว้โดยเฉพาะในเงื่อนไขการให้บริการแอพพลิเคชั่น ITTP บริษัทไม่มีนโยบายในการเปิดเผยข้อมูลส่วนบุคคลของท่านให้บุลคลที่สามโดบมิได้รับความยิมยอมโดยชัดแจ้งจากท่าน เว้นแต่เป็นการให้ข้อมูลตามที่กฎหมาบกำหนด หรือเมื่อมีหมายเรียกของศาลหรือมีคำสั่งที่ถูกต้องตามกฎหมายของหน่วยงานของรัฐที่เกี่ยวข้อง'
  },
];

class Privacy extends Component {
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
                policy.map((u) => {
                  return (
                    <View key={u.id}>
                      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>{u.title}</Text>
                      <Text style={{ marginBottom: 10 }}>{u.detail}</Text>                     
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

export default Privacy;

