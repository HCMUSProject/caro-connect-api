import axios from 'axios';

export const MARK = 'MARK';
export const SET_TURN = 'SET_NEXT_TURN';
export const SET_WINNER = 'SET_WINNER';
export const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';
export const SET_STEP = 'SET_STEP';
export const EMPTY_HISTORY = 'EMPTY_HISTORY';
export const START_REGISTER = 'START_REGISTER';
export const END_REGISTER = 'END_REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function mark({ row, col, player }) {
  return { type: MARK, row, col, player };
}

export function setTurn(turn) {
  return { type: SET_TURN, turn };
}

export function setWinner(winner) {
  return { type: SET_WINNER, winner };
}

export function addHistoryItem(historyItem) {
  return { type: ADD_HISTORY_ITEM, historyItem };
}

export function setHistoryStep(step) {
  return { type: SET_STEP, step };
}

export function emptyHistory() {
  return { type: EMPTY_HISTORY };
}

export function startRegister() {
  return { type: START_REGISTER };
}

export function endRegister(data, success) {
  return { type: END_REGISTER, data, success };
}

export function registerError(error) {
  return { type: REGISTER_ERROR, error };
}

export function register(user) {
  return dispatch => {
    dispatch(startRegister());

    const { REACT_APP_HOST_BE } = process.env;

    // call api
    return axios
      .post(`${REACT_APP_HOST_BE}/user/register`, user)
      .then(response => {
        dispatch(endRegister(response.data.data, response.data.success));
      })
      .catch(error => {
        dispatch(registerError(error.response.data.error));
      });
  };
}
