import defaultSettings from './GameSettings';

class CodeBreaker {

  static MATCH_KEYS = {
    position: 0,
    color: 1,
    none: 2
  }

  constructor(settings = defaultSettings) {
    this.settings = settings;
  }

  checkGuess(code, guess) {
    if (!(code.length === guess.length)) {
      throw new Error(`Guess length ${guess.length} must be equal to code length ${code.length}`);
    }

    let key = [];
    let xs = [];
    let ys = [];

    for (let i = 0; i < code.length; i++) {
      if (code[i] === guess[i]) {
        key.push(CodeBreaker.MATCH_KEYS.position);
      } else {
        xs.push(code[i]);
        ys.push(guess[i]);
      }
    }

    while (xs.length > 0) {
      let x = xs.shift();
      for (let i = 0; i < ys.length; i++) {
        let y = ys.shift();
        if (x === y) {
          key.push(CodeBreaker.MATCH_KEYS.color);
          break;
        } else {
          ys.push(y);
        }
      }
    }

    while (key.length < code.length) {
      key.push(CodeBreaker.MATCH_KEYS.none);
    }

    return key;
  }
}

export default CodeBreaker;