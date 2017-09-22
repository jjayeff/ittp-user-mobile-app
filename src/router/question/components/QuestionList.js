import React, { Component } from 'react';
import { ListView } from 'react-native';
import QuestionListItem from '../containers/QuestionListItem';
import { DataQuestion } from './DataQuestion';

class QuestionList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(DataQuestion);
  }

  renderRow(library) {
    return <QuestionListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default QuestionList;
