import { START_REGISTER, END_REGISTER, REGISTER_ERROR } from '../actions';

const initialState = {
  isFetching: false,
  user: {
    email: null,
  },
  success: null,
  error: null,
};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case START_REGISTER:
      return { ...state, isFetching: true };
    case END_REGISTER:
      return {
        ...state,
        isFetching: false,
        user: action.data,
        success: action.success,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
