import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from '../../../components/common';

class QuestionListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, selectionQuestionId } = this.props;
    if (library.id === selectionQuestionId) {
      return (
        <CardSection>        
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
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
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default QuestionListItem;
