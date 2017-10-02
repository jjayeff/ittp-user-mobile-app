import { combineReducers } from 'redux';
import loansReducer from './loan';
import transactionsReducer from './transaction';
import QuestionReducer from './question';

export default combineReducers({
  loans: loansReducer,
  transactions: transactionsReducer,
  selectionQuestionId: QuestionReducer
});
