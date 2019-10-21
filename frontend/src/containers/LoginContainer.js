import { connect } from 'react-redux';
import WrappedLogin from '../components/login_register/Login';
import { login } from '../actions';

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    success: state.login.success,
    error: state.login.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedLogin);

export default LoginContainer;
