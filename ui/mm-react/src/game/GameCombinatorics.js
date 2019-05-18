import CodeBreaker from './CodeBreaker';
import * as comb from 'applied-combinatorics';
import defaultSettings from './GameSettings';

class GameCombinatorics {
  constructor(settings = defaultSettings) {
    this.settings = settings;
  }

  generatePermutations() {
    const elements = [];
    for (let i = 0; i <= this.settings.codeMaximumDigit; i++) {
      elements.push(i);
    }
    const length = this.settings.codeLength;

    return comb.enumeratePermutations(elements, length, true);
  }

  filterPermutationsByAnswer(codes, prevGuess, prevAnswer) {
    const breaker = new CodeBreaker(this.settings);

    const filtered = [];
    for (let code of codes) {
      const answer = breaker.checkGuess(code, prevGuess);
      if (answer[0] === prevAnswer[0] &&
        answer[1] === prevAnswer[1]) {
        filtered.push(code);
      }
    }

    return filtered;
  }

  reducePermutations(codes, guesses, answers) {
    let reduced = codes;
    for (let i = 0; i < guesses.length; i++) {
      reduced = this.filterPermutationsByAnswer(reduced, guesses[i], answers[i]);
    }
    return reduced;
  }

  pivot(codes) {
    const dimx = this.settings.codeLength + 1;
    const dimy = this.settings.codeMaximumDigit + 1;
    const pivot = [];
    for (let y = 0; y < dimy; y++) {
      pivot.push(Array(dimx).fill(0));
    }
    for (let i = 0; i < codes.length; i++) {
      for (let j = 0; j < codes[i].length; j++) {
        pivot[codes[i][j]][j]++;
      }
      for (let j = 0; j < dimy; j++) {
        if (codes[i].indexOf(j) > -1) {
          pivot[j][dimx - 1]++;
        }
      }
    }
    return pivot;
  }
}

export default GameCombinatorics;