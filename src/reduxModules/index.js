import { combineReducers } from 'redux';
import loansReducer from './loan';
import mockLoan from './mockLoan';
import mockTransaction90 from './mockTransaction90';
import TransactionReducer from './Transaction';
import QuestionReducer from './question';

export default combineReducers({
  loan: loansReducer,
  loans: mockLoan,
  transactions90: mockTransaction90,
  transactions: TransactionReducer,
  selectionQuestionId: QuestionReducer
});
