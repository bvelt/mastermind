
class CodeMaker {

  constructor(length = 4, maxDigit = 5) {
    this.length = length;
    this.maxDigit = maxDigit;
  }

  createRandomly() {
    let code = [];
    for (let i = 0; i < this.length; i++) {
      code.push(this.randomDigit());
    }
    return code;
  }

  createManually(code) {
    this.validateCode(code);
    return Array.from(code);
  }

  randomDigit() {
    return Math.floor(Math.random() * (this.maxDigit + 1));
  }

  validateCode(code) {
    if (code.length !== this.length) {
      throw new Error(`Code must be array of length ${this.length}`);
    }
    if (code.find(c => c < 0 || c > this.maxDigit)) {
      throw new Error(`Code item must be digit between 0 and ${this.maxDigit}`);
    }
  }
}

export default CodeMaker;