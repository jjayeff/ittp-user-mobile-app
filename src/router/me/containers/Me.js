import { connect } from 'react-redux';
import Me from '../components/Me';
import { submitLogout } from '../../../reduxModules/auth';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
  });
};

export default connect(mapStateToProps, { submitLogout })(Me);
