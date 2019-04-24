import CodeMaker from './CodeMaker'

describe('CodeMaker', () => {
  const maker = new CodeMaker();
  test('should generate random code of expected length', () => {
    const code = maker.createRandomly();
    expect(code).toHaveLength(maker.length);
  });
  test('should generate random code with digits in range', () => {
    const code = maker.createRandomly();
    for (let x of code) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(maker.maxDigit);
    }
  });
  test('should throw error if code is wrong length', () => {
    expect(() => maker.createManually([0, 1])).toThrow();
    expect(() => maker.createManually([0, 1, 1, 3, 5])).toThrow();
  });
});