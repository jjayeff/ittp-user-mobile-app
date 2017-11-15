import { call, put, takeLatest } from 'redux-saga/effects';
import { postJSON, API_SERVER } from '../utils/api';
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILED,
  SUBMIT_LOGOUT,
  SUBMIT_LOGOUT_SUCCESS,
  SUBMIT_LOGOUT_FAILED
} from '../reduxModules/auth';

export function* submitLogin(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER}/api/Auth/${action.payload.username}/accessTokens`, action.payload);
    yield put({
      type: SUBMIT_LOGIN_SUCCESS,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_LOGIN_FAILED,
      payload: error,
    });
  }
}

export function* submitLogout() {
  try {
    yield put({
      type: SUBMIT_LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_LOGOUT_FAILED,
    });
  }
}

function* watchAuthSagas() {
  yield takeLatest(SUBMIT_LOGIN, submitLogin);
  yield takeLatest(SUBMIT_LOGOUT, submitLogout);  
}

export default watchAuthSagas;
