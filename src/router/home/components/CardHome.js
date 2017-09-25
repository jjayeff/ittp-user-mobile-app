import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardIcon, CardIcons } from '../../../components/common';
import {
  HISTORY_NAME,
  PAYMENT,
  CHANNEL_PAYMENT,
  CONTACT,
  PLACE,
  PRODUCT,
  QUESTION
} from '../../../texts';

const CardHome = (props) => {
  const { containerStyle, rowStyle } = styles;
  const { history, barcode, product, contact, question, channel, place } = props.onPress;
  return (
    <View style={containerStyle}>
      <View style={rowStyle}>
        <CardIcon title={HISTORY_NAME} icon='library-books' iconColor='#03A9F4' onPress={history} />
        <CardIcon title={PAYMENT} icon='payment' iconColor='#366dc0' onPress={barcode} />
      </View>
      <View style={rowStyle}>
        <CardIcon title={CHANNEL_PAYMENT} icon='get-app' iconColor='#03A9F4' onPress={channel} />
        <CardIcon title={CONTACT} icon='message' iconColor='#366dc0' onPress={contact} />
      </View>
      <View style={rowStyle}>
        <CardIcons title={PLACE} icon='home' iconColor='#366dc0' onPress={place} />
        <CardIcons title={PRODUCT} icon='account-balance' iconColor='#03A9F4' onPress={product} />
        <CardIcons title={QUESTION} icon='?' iconColor='#ED6351' onPress={question} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    width: '100%',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  }
});

export default CardHome;
