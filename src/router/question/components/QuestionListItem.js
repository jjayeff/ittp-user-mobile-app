import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from '../../../components/common';
import { normalize } from '../../../utils/fontResponsive';

class QuestionListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, selectionQuestionId } = this.props;
    if (library.id === selectionQuestionId) {
      return (
        <CardSection>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'Cloud-Light' }}>
              {library.description}
            </Text>
          </View>
        </CardSection>

      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectQuestion(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: normalize(18),
    paddingLeft: 15,
    fontFamily: 'Cloud-Light'
  }
};

export default QuestionListItem;
