import { connect } from 'react-redux';
import Barcode from '../components/Barcode';
import { fetchLoansCID } from '../../../reduxModules/loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loan,
    transactions: state.transactions90,
  });
};

export default connect(mapStateToProps, { fetchLoansCID })(Barcode);
