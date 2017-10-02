import { call, put, takeLatest } from 'redux-saga/effects';
import { getJSON, API_SERVER } from '../utils/api';
import {
  FETCH_TRANSACTION_CID,
  FETCH_TRANSACTION_CID_SUCCESS,
  FETCH_TRANSACTION_CID_FAILED,
  FETCH_TRANSACTION90_CID,
  FETCH_TRANSACTION90_CID_SUCCESS,
  FETCH_TRANSACTION90_CID_FAILED
} from '../reduxModules/transaction';
import data from '../reduxModules/TransactionFetch';
import { mockup } from '../../config';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTransactionsCID(action) {
  try {
    let json;
    if (mockup) {
      json = data;
    } else {
      json = yield call(getJSON, `${API_SERVER}/api/Loans/mobile/${action.payload}/transactions`);
    }
    yield put({
      type: FETCH_TRANSACTION_CID_SUCCESS,
      payload: json
    });
  } catch (e) {
    yield put({
      type: FETCH_TRANSACTION_CID_FAILED,
      message: e.message
    });
  }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTransactions90CID(action) {
  try {
    let json;
    if (mockup) {
      json = data;
    } else {
      json = yield call(getJSON, `${API_SERVER}/api/Loans/mobile/${action.payload}/transactions90`);
    }
    yield put({
      type: FETCH_TRANSACTION90_CID_SUCCESS,
      payload: json
    });
  } catch (e) {
    yield put({
      type: FETCH_TRANSACTION90_CID_FAILED,
      message: e.message
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchTransactionSagas() {
  yield takeLatest(FETCH_TRANSACTION_CID, fetchTransactionsCID);
  yield takeLatest(FETCH_TRANSACTION90_CID, fetchTransactions90CID);  
}

export default watchTransactionSagas;
