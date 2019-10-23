import { connect } from 'react-redux';
import WrappedRegisterForm from '../components/login_register/Register';
import { register } from '../actions';

const mapStateToProps = state => {
  return {
    isFetching: state.register.isFetching,
    success: state.register.success,
    error: state.register.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(register(user));
    },
  };
};
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedRegisterForm);

export default RegisterContainer;
