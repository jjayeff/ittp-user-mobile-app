import { connect } from 'react-redux';
import Barcode from '../components/Barcode';
import { fetchLoansCID } from '../../../reduxModules/loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    transactions: state.transactions,
  });
};

export default connect(mapStateToProps, { fetchLoansCID })(Barcode);
