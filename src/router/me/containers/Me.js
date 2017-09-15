import { connect } from 'react-redux';
import Me from '../components/Me';

const mapStateToProps = (state) => {
  return ({
    loans: state.loans,
  });
};

export default connect(mapStateToProps)(Me);
