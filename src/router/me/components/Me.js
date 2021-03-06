import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MeSummary from './MeSummary.js';
import MeList from './MeList';

class Me extends Component {
  render() {
    const { meStyle } = styles;
    return (
      <View style={meStyle}>
        <ScrollView>
          <View style={{ height: 200 }}>
            <MeSummary loans={this.props.loans.loanDb} />
          </View>
          <MeList submitLogout={this.props.submitLogout} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  meStyle: {
    flex: 1,
    justifyContent: 'space-between',
  }
});

export default Me;
