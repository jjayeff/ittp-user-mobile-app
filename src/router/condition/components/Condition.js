import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const list = [
  {
    id: 1,
    title: 'เงื่อนไขการให้บริการแอพพลิเคชั่น ITTP',
    detail: ''
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
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Condition;

