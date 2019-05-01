import * as types from './ActionTypes';

export function checkGuess(values) {
  return {
    type: types.breaker.CHECK_GUESS
  };
}

export function removeGuessToken() {
  return {
    type: types.breaker.REMOVE_GUESS_TOKEN
  };
}

export function newGame() {
  return {
    type: types.breaker.NEW_GAME
  };
}

export function randomGuess() {
  return {
    type: types.breaker.RANDOM_GUESS
  };
}

export function resetGuess() {
  return {
    type: types.breaker.RESET_GUESS
  };
}

export function appendGuessToken(value) {
  return {
    type: types.breaker.APPEND_GUESS_TOKEN,
    value: value
  };
}

export function removeCodeToken() {
  return {
    type: types.maker.REMOVE_CODE_TOKEN
  };
}

export function randomCode() {
  return {
    type: types.maker.RANDOM_CODE
  };
}

export function resetCode() {
  return {
    type: types.maker.RESET_CODE
  };
}

export function saveCode() {
  return {
    type: types.maker.SAVE_CODE
  };
}

export function appendCodeToken(value) {
  return {
    type: types.maker.APPEND_CODE_TOKEN,
    value: value
  };
}