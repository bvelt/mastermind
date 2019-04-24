import CodeBreaker from './CodeBreaker';

describe('CodeBreaker', () => {
  test('should return 4 black pegs for exact match', () => {
    const breaker = new CodeBreaker([0, 1, 2, 3]);
    let results = breaker.makeGuess(breaker.code);
    expect(results.broken).toEqual(true);
    expect(results.matches).toEqual([0, 0, 0, 0]);
  });
  test('should return 4 white pegs for reverse of code', () => {
    const breaker = new CodeBreaker([0, 1, 2, 3]);
    const results = breaker.makeGuess([3, 2, 1, 0]);
    expect(results.broken).toEqual(false);
    expect(results.matches).toEqual([1, 1, 1, 1]);
  });
  test('should match duplicate colors only up to number of duplicate colors in code', () => {
    const breaker = new CodeBreaker([0, 0, 1, 1]);
    const results = breaker.makeGuess([0, 0, 0, 1]);
    expect(results.broken).toEqual(false);
    expect(results.matches).toEqual([0, 0, 0, 2]);
  });
  test('should return 4 none pegs for no matches', () => {
    const breaker = new CodeBreaker([0, 0, 1, 1]);
    const results = breaker.makeGuess([2, 2, 3, 3]);
    expect(results.broken).toEqual(false);
    expect(results.matches).toEqual([2, 2, 2, 2]);
  });
});