import GameCombinatorics from './GameCombinatorics';
import * as comb from 'applied-combinatorics';
import CodeBreaker from './CodeBreaker';

describe("GameCombinatorics", () => {
  it('should generate permutations based on settings', () => {
    const gc = new GameCombinatorics();
    const ps = gc.generatePermutations();
    expect(ps.length).toEqual(
      comb.numberOfPermutations(gc.settings.codeMaximumDigit + 1,
        gc.settings.codeLength,
        true));
  });
  it('should filter code permutations that match answer of previous guess', () => {
    const gc = new GameCombinatorics();
    const codes = [];
    for (let i = 0; i <= gc.settings.codeMaximumDigit; i++) {
      codes.push([0, 0, 0].concat([i]));
    }
    const prevGuess = codes[1];
    const breaker = new CodeBreaker(gc.settings);
    const prevAnswer = breaker.checkGuess(codes[0], prevGuess);
    const filtered = gc.filterPermutationsByAnswer(codes, prevGuess, prevAnswer);
    expect(filtered.length).toEqual(codes.length - 1);
  })
});