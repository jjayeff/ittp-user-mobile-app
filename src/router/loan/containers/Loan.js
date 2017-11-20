import { connect } from 'react-redux';
import Loan from '../components/Loan';
import { fetchLoansCID } from '../../../reduxModules/loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
    auth: state.auth,    
  });
};

export default connect(mapStateToProps, { fetchLoansCID })(Loan);
