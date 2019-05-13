import CodeBreaker from './CodeBreaker';

describe('CodeBreaker', () => {
  test('should return 4 black pegs for exact match', () => {
    const breaker = new CodeBreaker();
    const code = [0, 1, 2, 3];
    const key = breaker.checkGuess(code, code);
    expect(key).toEqual([4, 0]);
  });
  test('should return 4 white pegs for reverse of code', () => {
    const breaker = new CodeBreaker();
    const code = [0, 1, 2, 3];
    const guess = [3, 2, 1, 0]
    const key = breaker.checkGuess(code, guess);
    expect(key).toEqual([0, 4]);
  });
  test('should match duplicate colors only up to number of duplicate colors in code', () => {
    const breaker = new CodeBreaker();
    const code = [0, 0, 1, 1];
    const guess = [0, 0, 0, 1]
    const key = breaker.checkGuess(code, guess);
    expect(key).toEqual([3, 0]);
  });
  test('should return 0 pegs for no matches', () => {
    const breaker = new CodeBreaker();
    const code = [0, 0, 1, 1];
    const guess = [2, 2, 3, 3]
    const key = breaker.checkGuess(code, guess);
    expect(key).toEqual([0, 0]);
  });
});