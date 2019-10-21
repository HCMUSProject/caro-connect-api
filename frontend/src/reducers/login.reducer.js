import { START_LOGIN, END_LOGIN, LOGIN_ERROR } from '../actions';

const initialState = {
  isFetching: false,
  user: null,
  success: null,
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, isFetching: true };
    case END_LOGIN:
      return {
        ...state,
        isFetching: false,
        user: action.data,
        success: action.success,
      };
    case LOGIN_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}
