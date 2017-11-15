export const SUBMIT_LOGIN = 'ittp/SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'ittp/SUBMIT_LOGIN_SUCCESS';
export const SUBMIT_LOGIN_FAILED = 'ittp/SUBMIT_LOGIN_FAILED';
export const SUBMIT_LOGOUT = 'ittp/SUBMIT_LOGOUT';
export const SUBMIT_LOGOUT_SUCCESS = 'ittp/SUBMIT_LOGOUT_SUCCESS';
export const SUBMIT_LOGOUT_FAILED = 'ittp/SUBMIT_LOGOUT_FAILED ';


export const submitLogin = (json) => ({
  type: SUBMIT_LOGIN,
  payload: json
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

const initialState = {
  accessToken: undefined,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false
      };
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isLoggedIn: true
      };
    case SUBMIT_LOGIN_FAILED:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default reducer;
