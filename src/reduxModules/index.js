import { combineReducers } from 'redux';
import loansReducer from './loan';
import transactionsReducer from './transaction';
import mockTransaction90 from './mockTransaction90';
import QuestionReducer from './question';

export default combineReducers({
  loans: loansReducer,
  transactions: transactionsReducer,
  transactions90: mockTransaction90,
  selectionQuestionId: QuestionReducer
});
