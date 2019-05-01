import * as types from '../actions/ActionTypes';
import GameState from '../game/GameState';
import GameFlow from '../game/GameFlow';

function game(state = new GameState(), action) {
  const flow = new GameFlow(state);
  switch (action.type) {
    case types.breaker.CHECK_GUESS:
      flow.checkGuess();
      return flow.state;
    case types.breaker.REMOVE_GUESS_TOKEN:
      flow.removeGuessToken();
      return flow.state;
    case types.breaker.NEW_GAME:
      flow.newGame();
      return flow.state;
    case types.breaker.RANDOM_GUESS:
      flow.randomGuess();
      return flow.state;
    case types.breaker.RESET_GUESS:
      flow.resetGuess();
      return flow.state;
    case types.breaker.APPEND_GUESS_TOKEN:
      flow.appendGuessToken(action.value);
      return flow.state;
    case types.maker.REMOVE_CODE_TOKEN:
      flow.removeCodeToken();
      return flow.state;
    case types.maker.RANDOM_CODE:
      flow.randomCode();
      return flow.state;
    case types.maker.RESET_CODE:
      flow.resetCode();
      return flow.state;
    case types.maker.SAVE_CODE:
      flow.saveCode();
      return flow.state;
    case types.maker.APPEND_CODE_TOKEN:
      flow.appendCodeToken(action.value);
      return flow.state;
    default:
      return state;
  }
}

export default game;