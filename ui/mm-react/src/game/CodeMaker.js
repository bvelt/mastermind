import defaultSettings from './GameSettings';

class CodeMaker {

  constructor(settings = defaultSettings) {
    this.settings = settings;
  }

  createRandom() {
    let code = [];
    for (let i = 0; i < this.settings.codeLength; i++) {
      code.push(this.randomDigit());
    }
    return code;
  }

  createManual(code) {
    const newCode = Array.from(code);
    this.validateCode(newCode);
    return newCode;
  }

  resetCode(code) {
    if (code.length === 0) {
      throw new Error("Code is aleady empty");
    }
    return [];
  }

  appendCodeToken(code, value) {
    if (!(code.length < this.settings.codeLength)) {
      throw new RangeError(`Code is at maximum length ${this.settings.codeLength}`);
    }
    this.validateCodeToken(value);
    const newCode = Array.from(code);
    newCode.push(value);
    return newCode;
  }

  removeCodeToken(code) {
    if (code.length === 0) {
      throw new RangeError("Code is already empty");
    }
    const newCode = Array.from(code);
    newCode.pop();
    return newCode;
  }

  randomDigit() {
    return Math.floor(Math.random() * (this.settings.codeMaximumDigit + 1));
  }

  validateCodeToken(value) {
    if (!(value >= 0 && value <= this.settings.codeMaximumDigit)) {
      throw new Error(`Code token must be digit between 0 and ${this.settings.codeMaximumDigit}`);
    }
  }

  validateCode(code) {
    if (code.length !== this.settings.codeLength) {
      throw new Error(`Code must be array of length ${this.settings.codeLength}`);
    }
    code.forEach(value => {
      this.validateCodeToken(value);
    });
  }
}

export default CodeMaker;