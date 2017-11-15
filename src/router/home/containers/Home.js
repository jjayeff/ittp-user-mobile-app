import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchLoansCID } from '../../../reduxModules/loan';
import { fetchTransactionsCID, fetchTransactions90CID } from '../../../reduxModules/transaction';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    transactions: state.transactions,
    auth: state.auth,    
  });
};

export default connect(mapStateToProps,
  { fetchLoansCID, fetchTransactionsCID, fetchTransactions90CID }
)(Home);
