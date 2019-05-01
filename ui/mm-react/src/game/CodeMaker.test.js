import CodeMaker from './CodeMaker';

describe('CodeMaker', () => {
  test('should create random code of expected length', () => {
    const maker = new CodeMaker();
    const code = maker.createRandom();
    expect(code).toHaveLength(maker.settings.codeLength);
  });
  test('should create manual code', () => {
    const maker = new CodeMaker();
    const code = [0, 1, 2, 3];
    const newCode = maker.createManual(code);
    expect(newCode).toEqual(code);
  });
  test('should append code token', () => {
    const maker = new CodeMaker();
    let code = [];
    for (let i = 0; i < maker.settings.codeLength; i++) {
      code = maker.appendCodeToken(code, 1);
      expect(code).toEqual(Array(i + 1).fill(1));
    }
    expect(() => maker.appendCodeToken(code, 1)).toThrow();
  });
  test('should remove code token', () => {
    const maker = new CodeMaker();
    let code = [0, 1, 2, 3];
    for (let i = 0; i < maker.settings.codeLength; i++) {
      code = maker.removeCodeToken(code)
      expect(code.length).toEqual(maker.settings.codeLength - (i + 1));
    }
    expect(() => maker.removeCodeToken(code)).toThrow();
  });
  test('should reset code', () => {
    const maker = new CodeMaker();
    let code = maker.createRandom();
    expect(code).toHaveLength(maker.settings.codeLength);
    code = maker.resetCode(code);
    expect(code).toHaveLength(0);
  });
  test('should generate random code with digits in range', () => {
    const maker = new CodeMaker();
    const code = maker.createRandom();
    for (let x of code) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(maker.settings.codeMaximumDigit);
    }
  });
  test('should throw error if code is wrong length', () => {
    const maker = new CodeMaker();
    expect(() => maker.createManual([0, 1])).toThrow();
    expect(() => maker.createManual([0, 1, 1, 3, 5])).toThrow();
  });
  test('should throw error if code item exceeds maximum value', () => {
    const maker = new CodeMaker();
    expect(() => maker.createManual([9, 1, 1, 3])).toThrow();
  });
});