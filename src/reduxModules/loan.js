//mock data
import data from './LoanFetch.json';

export const FETCH_LOANS_CID = 'ittp/FETCH_LOANS_CID';
export const FETCH_LOANS_CID_SUCCESS = 'ittp/FETCH_LOANS_CID_SUCCESS';
export const FETCH_LOANS_CID_FAILED = 'ittp/FETCG_LOANS_CID_FAILED';

export const fetchLoansCID = (citizenId) => ({
  type: FETCH_LOANS_CID,
  payload: citizenId,
});

const initialState = {
  loanDb: data,
  error: '',
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOANS_CID:
      return {
        ...state,
        // loading: false,
      };
    case FETCH_LOANS_CID_SUCCESS: {
      return {
        ...state,
        // loanDb: action.payload,
        // error: '',
        // loading: true,
      };
    }
    case FETCH_LOANS_CID_FAILED:
    default:
      return state;
  }
};

export default reducer;
