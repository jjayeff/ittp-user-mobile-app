import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Bottom } from '../../components/common';
import Me from './containers/Me';
import { ME } from '../../texts';

const Home = () => {
  const { meStyle } = styles;
  return (
    <View style={meStyle}>
      <Header headerText={ME} />
      <Me />
      <Bottom selectedTab={ME} />
    </View>
  );
};

const styles = StyleSheet.create({
  meStyle: {
    backgroundColor: '#e6eaed',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Home;
