import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

class Date extends Component {
  state = { date: moment() };
  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        format="DD MMMM YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => { this.setState({ date }); }}
      />
    );
  }
}

export { Date };
