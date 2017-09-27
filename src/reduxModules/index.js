import { combineReducers } from 'redux';
import loansReducer from './loan';
import mockTransaction90 from './mockTransaction90';
import mockTransactionReducer from './Transaction';
import QuestionReducer from './question';

export default combineReducers({
  loans: loansReducer,
  transactions90: mockTransaction90,
  transactions: mockTransactionReducer,
  selectionQuestionId: QuestionReducer
});
