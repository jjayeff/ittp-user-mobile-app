import { call, put, takeLatest } from 'redux-saga/effects';
import { getJSON, API_SERVER } from '../utils/api';
import {
  FETCH_LOANS_CID,
  FETCH_LOANS_CID_SUCCESS,
  FETCG_LOANS_CID_FAILED
} from '../reduxModules/loan';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchLoansCID(action) {
   try {
      const json = yield call(getJSON, `${API_SERVER}/api/Loans/citizen/${action.payload}`);
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
function* watchTransactionSagas() {
  yield takeLatest(FETCH_LOANS_CID, fetchLoansCID);
}

export default watchTransactionSagas;
