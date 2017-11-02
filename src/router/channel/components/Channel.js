import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { normalize } from '../../../utils/fontResponsive';

const channel = [
  {
    image: require('../../../../store/image/channel1.jpg'),
    title1: 'ฟรี ค่าธรรมเนียม',
    title2: '(เมื่อชำระไม่เกิน 5,000 บาท)'
  },
  {
    image: require('../../../../store/image/channel2.png'),
    title1: 'โอนง่ายผ่าน ATM หรือ',
    title2: 'แอพพลิเคชั่นมือถือธนาคาร'
  },
  {
    image: require('../../../../store/image/channel3.png'),
    title1: 'ตรวจสอบง่าย สะดวกกว่า',
    title2: '​ไม่ต้องส่งสลิปเงินโอนมายืนยัน'
  },
];

class Channel extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView>
          <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
            <View style={{ paddingBottom: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: normalize(20), fontFamily: 'Cloud-Light' }}>ลูกค้าไอทีทีพีสามารถชำระเงินได้ 2 ช่องทาง</Text>
            </View>
            <View style={{ backgroundColor: '#fff' }}>
              <View style={{ padding: 10 }}>
                <Text>1. ชำระผ่านบัญชีพร้อมเพย์บริษัท (ไม่เสียค่าธรรมเนียม ลูกค้าไม่ต้องมีพร้อมเพย์ก็โอนได้)</Text>
              </View>
              <View style={{ padding: 10 }}>
                <View style={{ backgroundColor: '#0068AF', alignItems: 'center', padding: 15 }}>
                  <View style={{ alignItems: 'center', paddingBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>บริษัท ไอทีทีพี</Text>
                    <Text style={{ color: '#fff' }}>เพิ่มช่องทางการชำระเงินด้วยรหัสพร้อมเพย์</Text>
                  </View>
                  <View style={{ alignItems: 'center', paddingBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>โอนเงินโดย</Text>
                    <Text style={{ color: '#fff' }}>กรอกรหัสประจำตัวผู้เสียภาษีบริษัท ไอทีทีพี</Text>
                    <Text style={{ color: '#fff' }}>TAX ID: 0105554146049</Text>
                  </View>
                  <View style={{ alignItems: 'center', paddingBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>สอบถามยอดการชำระที่</Text>
                    <Text style={{ color: '#fff' }}>ไลน์ @ittp หรือโทร 02-153-9580</Text>
                  </View>
                </View>
              </View>
              <View>
                {
                  channel.map((u) => {
                    return (
                      <View style={{ alignItems: 'center' }}>
                        <Text style={{ marginBottom: 10 }}>{u.title1} {u.title2}</Text>
                      </View>
                    );
                  })
                }
              </View>
              <View style={{ padding: 10 }}>
                <View style={{ backgroundColor: '#0068AF', alignItems: 'center', padding: 15 }}>
                  <View style={{ alignItems: 'center', paddingBottom: 5 }}>
                    <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>วิธีการเปิดใช้ พร้อมเพย์ </Text>
                    <Text style={{ color: '#fff' }}>ไปที่ธนาคาร หรือ ATM ของธนาคารที่ท่านมีบัญชี</Text>
                    <Text style={{ color: '#fff' }}>ดำเนินการตามขั้นตอนลงทะเบียนพร้อมเพย์</Text>
                    <Text style={{ color: '#fff' }}>ที่ธนาคารกำหนด เพียงไม่เกิน 3 นาที</Text>
                  </View>
                  <View style={{ alignItems: 'center', paddingBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>กรณีลูกค้าใหม่</Text>
                    <Text style={{ color: '#fff' }}>กรุณาโทรแจ้งรหัสพร้อมเพย์กับเราทาง</Text>
                    <Text style={{ color: '#fff' }}>Line: @ittp หรือ โทร 02-153-9580</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View style={{ backgroundColor: '#fff' }}>
                <View style={{ padding: 10 }}>
                  <Text>2. แสกนบาร์โค้ดที่ปรากฏบนใบแจ้งหนี้/ใบเสร็จรับเงิน (ค่าธรรมเนียม 15-30 บาท)</Text>
                </View>
                <View style={{ padding: 10 }}>
                  <View style={{ backgroundColor: '#0068AF', alignItems: 'center', padding: 15 }}>
                    <Text style={{ color: '#fff' }}>สแกนบาร์โค้ดบนใบเสตทเม้นท์ที่บริษัทจัดส่งให้</Text>
                    <Text style={{ color: '#fff' }}>ทางเคาเตอร์ธนาคารกรุงเทพ หรือ ธนาคารออมสิน</Text>
                    <Text style={{ color: '#fff' }}>(ค่าธรรมเนียม 15-30 บาท)</Text>
                    <Text style={{ color: '#fff' }}>สามารถขอรับสเตทเม้นท์อิเล็คทรอนิคส์</Text>
                    <Text style={{ color: '#fff' }}>ได้ผ่านช่องทางไลน์บริษัท @ittp</Text>
                  </View>
                </View>
                <View style={{ padding: 10, alignItems: 'center' }}>
                  <Text>ตัวอย่าง ใบแจ้งหนี้ / ใบเสร็จรับเงิน</Text>
                  <View style={{ flex: 1, width: '100%', }}>
                    <Image source={require('../../../../store/image/channel4.jpg')} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
                  </View>
                  <View style={{ flex: 1, width: '100%', }}>
                    <Image source={require('../../../../store/image/channel5.jpg')} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
                  </View>
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ textDecorationLine: 'underline' }}>หมายเหตุ</Text>
                  <Text>1. วันสิ้นสุดกำหนดรับชำระ ณ รอบใบแจ้งยอด</Text>
                  <Text>2. ยอดชำระขั้นต่ำเดือนนี้</Text>
                  <Text>3. บาร์โค้ด ยื่นให้ทาง ธนาคารแสกนได้ </Text>       
                  <Text>(หากไม่ได้รับใบแจ้งยอด หรือ ได้รับล่าช้า กรุณาแจ้งแผนกลูกค้าสัมพันธ์ @ittp หรือโทร 02-153-9580)</Text>                                                                                        
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Channel;

