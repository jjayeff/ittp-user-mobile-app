import { call, put, takeLatest } from 'redux-saga/effects';
import { postJSON, getJSON, API_SERVER } from '../utils/api';
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_LOGIN_FAILED,
  SUBMIT_LOGOUT,
  SUBMIT_LOGOUT_SUCCESS,
  SUBMIT_LOGOUT_FAILED,
  HAS_ACCESS_TOKEN,
  HAS_ACCESS_TOKEN_SUCCESS,
  HAS_ACCESS_TOKEN_FAILED,
  SUBMIT_LOGIN_FACEBOOK,
  SUBMIT_LOGIN_FACEBOOK_SUCCESS,
  SUBMIT_LOGIN_FACEBOOK_FAILED,
  SUBMIT_CITIZENID_FACEBOOK,
  SUBMIT_CITIZENID_FACEBOOK_SUCCESS,
  SUBMIT_CITIZENID_FACEBOOK_FAILED,
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
      payload: 'เลขบัตรประชาชน หรือ เบอร์มือถือไม่ถูกต้อง',
    });
  }
}

export function* submitLoginFacebook(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER}/api/Auth/${action.payload.accessToken}/fb`, action.payload);
    yield put({
      type: SUBMIT_LOGIN_FACEBOOK_SUCCESS,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_LOGIN_FACEBOOK_FAILED,
      payload: action.payload,
    });
  }
}

export function* submitCitizenIdFacebook(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER}/api/Auth/${action.payload.accessToken}/setfb`, action.payload);
    yield put({
      type: SUBMIT_CITIZENID_FACEBOOK_SUCCESS,
      payload: json,
    });
  } catch (error) {
    const result = {
      accessToken: action.payload.accessToken,
      error: 'ไม่พบเลขบัตรประชาชนในระบบ'
    };
    yield put({
      type: SUBMIT_CITIZENID_FACEBOOK_FAILED,
      payload: result,
    });
  }
}

export function* hasAccessToken(action) {
  try {
    const json = yield call(getJSON, `${API_SERVER}/api/Auth/${action.payload}/citizenId`);
    yield put({
      type: HAS_ACCESS_TOKEN_SUCCESS,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: HAS_ACCESS_TOKEN_FAILED,
      payload: 'เกิดข้อผิดพลาดของระบบ',
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
  yield takeLatest(SUBMIT_LOGIN_FACEBOOK, submitLoginFacebook);
  yield takeLatest(SUBMIT_CITIZENID_FACEBOOK, submitCitizenIdFacebook);
  yield takeLatest(HAS_ACCESS_TOKEN, hasAccessToken);
  yield takeLatest(SUBMIT_LOGOUT, submitLogout);
}

export default watchAuthSagas;
