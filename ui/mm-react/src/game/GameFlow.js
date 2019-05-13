import GameState from './GameState';
import CodeMaker from './CodeMaker';
import CodeBreaker from './CodeBreaker';

class GameFlow {
  constructor(state = new GameState()) {
    this.state = state;
  }

  isActive() {
    return this.state.code.length > 0
      && this.state.broken !== true
      && this.state.prevGuesses.length < this.state.settings.maximumGuessCount;
  }

  isSuccess() {
    return this.state.broken === true;
  }

  isFailure() {
    return this.state.broken !== true
      && this.state.prevGuesses.length >= this.state.settings.maximumGuessCount;
  }

  copyAndPush(source, item) {
    const copied = Array.from(source);
    copied.push(Array.from(item));
    return copied;
  }

  checkGuess() {
    const breaker = new CodeBreaker(this.state.settings);
    const answer = breaker.checkGuess(this.state.code, this.state.nextGuess);
    const broken = answer[0] === this.state.settings.codeLength;
    this.state = Object.assign({}, this.state, {
      nextGuess: [],
      prevGuesses: this.copyAndPush(this.state.prevGuesses, this.state.nextGuess),
      prevAnswers: this.copyAndPush(this.state.prevAnswers, answer),
      broken: broken
    });
  }

  removeGuessToken() {
    const maker = new CodeMaker(this.state.settings);
    const nextGuess = maker.removeCodeToken(this.state.nextGuess);
    this.state = Object.assign({}, this.state, {
      nextGuess: nextGuess
    });
  }

  newGame() {
    const maker = new CodeMaker(this.state.settings);
    const randomCode = maker.createRandom();
    this.state = new GameState(this.state.settings, randomCode);
  }

  randomGuess() {
    const maker = new CodeMaker(this.state.settings);
    const randomGuess = maker.createRandom();
    this.state = Object.assign({}, this.state, {
      nextGuess: randomGuess
    });
  }

  resetGuess() {
    const maker = new CodeMaker(this.state.settings);
    const resetGuess = maker.resetCode(this.state.nextGuess);
    this.state = Object.assign({}, this.state, {
      nextGuess: resetGuess
    });
  }

  appendGuessToken(value) {
    const maker = new CodeMaker(this.state.settings);
    const nextGuess = maker.appendCodeToken(this.state.nextGuess, value);
    this.state = Object.assign({}, this.state, {
      nextGuess: nextGuess
    });
  }

  removeCodeToken() {
    const maker = new CodeMaker(this.state.settings);
    const code = maker.removeCodeToken(this.state.code);
    this.state = Object.assign({}, this.state, {
      code: code
    });
  }

  randomCode() {
    const maker = new CodeMaker(this.state.settings);
    const randomCode = maker.createRandom();
    this.state = Object.assign({}, this.state, {
      code: randomCode
    });
  }

  resetCode() {
    const maker = new CodeMaker(this.state.settings);
    const resetCode = maker.resetCode(this.state.code);
    this.state = Object.assign({}, this.state, {
      code: resetCode
    });
  }

  saveCode() {
    const maker = new CodeMaker(this.state.settings);
    const savedCode = maker.createManual(this.state.code);
    this.state = Object.assign({}, this.state, {
      code: savedCode
    });
  }

  appendCodeToken(value) {
    const maker = new CodeMaker(this.state.settings);
    const newCode = maker.appendCodeToken(this.state.code, value);
    this.state = Object.assign({}, this.state, {
      code: newCode
    });
  }
}

export default GameFlow;