import { connect } from 'react-redux';
import Loan from '../components/Loan';
import { fetchLoansCID } from '../../../reduxModules/loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loan,
  });
};

export default connect(mapStateToProps, { fetchLoansCID })(Loan);
