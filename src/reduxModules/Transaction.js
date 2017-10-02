export const FETCH_TRANSACTION_CID = 'ittp/FETCH_TRANSACTION_CID';
export const FETCH_TRANSACTION_CID_SUCCESS = 'ittp/FETCH_TRANSACTION_CID_SUCCESS';
export const FETCH_TRANSACTION_CID_FAILED = 'ittp/FETCG_TRANSACTION_CID_FAILED';

export const fetchTransactionsCID = (citizenId) => ({
  type: FETCH_TRANSACTION_CID,
  payload: citizenId,
});

const initialState = {
  transationDb: [],
  error: '',
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_CID:
      return {
        ...state,
        loading: false,
      };
    case FETCH_TRANSACTION_CID_SUCCESS: {
      return {
        ...state,
        transationDb: action.payload,
        error: '',
        loading: true,
      };
    }
    case FETCH_TRANSACTION_CID_FAILED:
    default:
      return state;
  }
};

export default reducer;
