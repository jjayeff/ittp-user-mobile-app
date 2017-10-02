export const FETCH_TRANSACTION_CID = 'ittp/FETCH_TRANSACTION_CID';
export const FETCH_TRANSACTION_CID_SUCCESS = 'ittp/FETCH_TRANSACTION_CID_SUCCESS';
export const FETCH_TRANSACTION_CID_FAILED = 'ittp/FETCG_TRANSACTION_CID_FAILED';
export const FETCH_TRANSACTION90_CID = 'ittp/FETCH_TRANSACTION90_CID';
export const FETCH_TRANSACTION90_CID_SUCCESS = 'ittp/FETCH_TRANSACTION90_CID_SUCCESS';
export const FETCH_TRANSACTION90_CID_FAILED = 'ittp/FETCG_TRANSACTION90_CID_FAILED';

export const fetchTransactionsCID = (citizenId) => ({
  type: FETCH_TRANSACTION_CID,
  payload: citizenId,
});

export const fetchTransactions90CID = (citizenId) => ({
  type: FETCH_TRANSACTION90_CID,
  payload: citizenId,
});

const initialState = {
  transactionDb: [],
  transaction90Db: [],
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
        transactionDb: action.payload,
        error: '',
        loading: true,
      };
    }
    case FETCH_TRANSACTION_CID_FAILED:
    case FETCH_TRANSACTION90_CID:
      return {
        ...state,
        loading: false,
      };
    case FETCH_TRANSACTION90_CID_SUCCESS: {
      return {
        ...state,
        transaction90Db: action.payload,
        error: '',
        loading: true,
      };
    }
    case FETCH_TRANSACTION90_CID_FAILED:
    default:
      return state;
  }
};

export default reducer;
