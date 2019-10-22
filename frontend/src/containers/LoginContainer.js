import { connect } from 'react-redux';
import WrappedLogin from '../components/login_register/Login';
import { login, getProfile } from '../actions';

const mapStateToProps = state => {
  return {
    isFetching: state.login.isFetching,
    success: state.login.success,
    error: state.login.error,
    user: state.login.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
    getProfile: () => {
      dispatch(getProfile());
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedLogin);

export default LoginContainer;
