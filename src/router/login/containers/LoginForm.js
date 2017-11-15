import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { submitLogin, submitLogout } from '../../../reduxModules/auth';

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, { submitLogin, submitLogout })(LoginForm);
