import { combineReducers } from 'redux';
import loansReducer from './loan';
import mockLoan from './mockLoan';
import TransactionReducer from './Transaction';

export default combineReducers({
  loan: loansReducer,
  loans: mockLoan,
  transactions: TransactionReducer,
});
