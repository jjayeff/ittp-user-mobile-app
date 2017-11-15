export const SUBMIT_LOGIN = 'ittp/SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'ittp/SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_FAILED = 'ittp/SUBMIT_LOGIN_FAILED';
export const SUBMIT_LOGOUT = 'ittp/SUBMIT_LOGOUT';
export const SUBMIT_LOGOUT_SUCCESS = 'ittp/SUBMIT_LOGOUT_SUCCESS';
export const SUBMIT_LOGOUT_FAILED = 'ittp/SUBMIT_LOGOUT_FAILED ';
export const HAS_ACCESS_TOKEN = 'ittp/HAS_ACCESS_TOKEN';
export const HAS_ACCESS_TOKEN_SUCCESS = 'ittp/HAS_ACCESS_TOKEN_SUCCESS';
export const HAS_ACCESS_TOKEN_FAILED = 'ittp/HAS_ACCESS_TOKEN_FAILED';


export const submitLogin = (json) => ({
  type: SUBMIT_LOGIN,
  payload: json
});

export const hasAccessToken = (json) => ({
  type: HAS_ACCESS_TOKEN,
  payload: json
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

const initialState = {
  accessToken: undefined,
  isLoggedIn: false,
  citizenId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
        citizenId: ''
      };
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isLoggedIn: true,
        citizenId: action.payload.username
      };
    case SUBMIT_LOGIN_FAILED:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
        citizenId: ''
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
        citizenId: ''
      };
    case HAS_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
        citizenId: ''
      };
    case HAS_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isLoggedIn: true,
        citizenId: action.payload.username
      };
    case HAS_ACCESS_TOKEN_FAILED:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
        citizenId: ''
      };
    default:
      return state;
  }
};

export default reducer;
