
class CodeBreaker {

  static MATCH_KEYS = {
    position: 0,
    color: 1,
    none: 2
  }

  constructor(code = []) {
    this.code = code;
  }

  makeGuess(guess) {
    if (guess.length !== this.code.length) {
      throw new Error(`Length of guess must be equal to ${this.code.length}`);
    }

    let matches = [];
    let xs = [];
    let ys = [];

    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i] === guess[i]) {
        matches.push(CodeBreaker.MATCH_KEYS.position);
      } else {
        xs.push(this.code[i]);
        ys.push(guess[i]);
      }
    }

    while (xs.length > 0) {
      let x = xs.shift();
      for (let i = 0; i < ys.length; i++) {
        let y = ys.shift();
        if (x === y) {
          matches.push(CodeBreaker.MATCH_KEYS.color);
          break;
        } else {
          ys.push(y);
        }
      }
    }

    while (matches.length < this.code.length) {
      matches.push(CodeBreaker.MATCH_KEYS.none);
    }

    const broken = matches.every(m =>
      m === CodeBreaker.MATCH_KEYS.position);

    return {
      broken: broken,
      matches: matches
    };
  }
}

export default CodeBreaker;