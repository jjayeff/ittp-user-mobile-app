import { call, put, takeLatest } from 'redux-saga/effects';
import { getJSON, API_SERVER } from '../utils/api';
import {
  FETCH_LOANS_CID,
  FETCH_LOANS_CID_SUCCESS,
  FETCG_LOANS_CID_FAILED
} from '../reduxModules/loan';
import data from '../reduxModules/LoanFetch';
import { mockup } from '../../config';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchLoansCID(action) {
  try {
    let json;
    if (mockup) {
      json = data;
    } else {
      json = yield call(getJSON, `${API_SERVER}/api/Loans/mobile/${action.payload}/loans`);
    }
    yield put({
      type: FETCH_LOANS_CID_SUCCESS,
      payload: json
    });
  } catch (e) {
    yield put({
      type: FETCG_LOANS_CID_FAILED,
      message: e.message
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchLoanSagas() {
  yield takeLatest(FETCH_LOANS_CID, fetchLoansCID);
}

export default watchLoanSagas;
