import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../../components/common';
import { REPOST_SERVER } from '../../../../config';
import { STATEMENT } from '../../../texts';

export default class LoanPDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageCount: 1,
    };
    this.pdf = null;
  }

  onPressBack() {
    Actions.loans();
  }

  prePage = () => {
    if (this.pdf) {
      const prePage = this.state.page > 1 ? this.state.page - 1 : 1;
      this.pdf.setNativeProps({ page: prePage });
      this.setState({ page: prePage });
      console.log(`prePage: ${prePage}`);
    }
  }

  nextPage = () => {
    if (this.pdf) {
      const nextPage = this.state.page + 1 > this.state.pageCount ? this.state.pageCount : this.state.page + 1;
      this.pdf.setNativeProps({ page: nextPage });
      this.setState({ page: nextPage });
      console.log(`nextPage: ${nextPage}`);
    }
  }

  render() {
    const source = { uri: `${REPOST_SERVER}/mobile-statement/?loan_id=${this.props.data}`, cache: true };
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={STATEMENT} onPress={this.onPressBack} />
        <View style={styles.container}>
          <Pdf
            ref={(pdf) => { this.pdf = pdf; }}
            source={source}
            page={1}
            horizontal={false}
            onLoadComplete={(pageCount) => {
              this.setState({ pageCount });
              console.log(`total page count: ${pageCount}`);
            }}
            onPageChanged={(page) => {
              this.setState({ page });
            }}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    margin: 5,
    padding: 5,
    backgroundColor: 'blue',
  },
  btnDisable: {
    margin: 5,
    padding: 5,
    backgroundColor: 'gray',
  },
  btnText: {
    color: '#FFF',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});
