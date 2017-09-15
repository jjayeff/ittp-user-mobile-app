import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchLoansCID } from '../../../reduxModules/loan';

const mapStateToProps = (state) => {
  return ({
    loans: state.loan,
  });
};

export default connect(mapStateToProps, { fetchLoansCID })(Home);
