import { connect } from 'react-redux';
import QuestionListItem from '../components/QuestionListItem';
import { selectQuestion } from '../../../reduxModules/question';

const mapStateToProps = (state) => {
  return ({
    selectionQuestionId: state.selectionQuestionId,
  });
};

export default connect(mapStateToProps, { selectQuestion })(QuestionListItem);
