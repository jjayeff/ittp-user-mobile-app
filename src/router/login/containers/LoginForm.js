import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { submitLogin, submitLogout, submitLoginFacebook } from '../../../reduxModules/auth';

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, { submitLogin, submitLogout, submitLoginFacebook })(LoginForm);
