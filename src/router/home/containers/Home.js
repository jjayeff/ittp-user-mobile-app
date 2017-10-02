import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchLoansCID } from '../../../reduxModules/loan';
import { fetchTransactionsCID } from '../../../reduxModules/transaction';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    transactions: state.transactions
  });
};

export default connect(mapStateToProps, { fetchLoansCID, fetchTransactionsCID })(Home);
