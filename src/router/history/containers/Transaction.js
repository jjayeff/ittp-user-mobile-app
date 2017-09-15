import { connect } from 'react-redux';
import Transaction from '../components/Transaction';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    transactions: state.transactions,
  });
};

export default connect(mapStateToProps)(Transaction);
