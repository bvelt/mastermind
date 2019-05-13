import defaultSettings from './GameSettings';

class CodeBreaker {

  constructor(settings = defaultSettings) {
    this.settings = settings;
  }

  checkGuess(code, guess) {
    if (!(code.length === guess.length)) {
      throw new Error(`Guess length ${guess.length} must be equal to code length ${code.length}`);
    }

    const answer = [0, 0];
    const xs = [];
    const ys = [];

    for (let i = 0; i < code.length; i++) {
      if (code[i] === guess[i]) {
        answer[0]++;
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
          answer[1]++;
          break;
        } else {
          ys.push(y);
        }
      }
    }

    return answer;
  }
}

export default CodeBreaker;