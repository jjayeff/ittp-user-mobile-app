import { connect } from 'react-redux';
import Address from '../components/Address';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
  });
};

export default connect(mapStateToProps)(Address);
