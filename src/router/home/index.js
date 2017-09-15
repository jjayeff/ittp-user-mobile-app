import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bottom } from '../../components/common';
import HomeComponent from './containers/Home';
import News from './components/News';
import { HOME } from '../../texts';

const Home = () => {
  const { homeStyle } = styles;
  return (
    <View style={homeStyle}>
      <News />
      <HomeComponent />
      <Bottom selectedTab={HOME} />      
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: '#e6eaed',          
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
  },
});

export default Home;
