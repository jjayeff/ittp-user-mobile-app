import { connect } from 'react-redux';
import CitizenIdForm from '../components/CitizenIdForm';
import { submitCitizenIdFacebook } from '../../../reduxModules/auth';

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, { submitCitizenIdFacebook, })(CitizenIdForm);
