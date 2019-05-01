
class GameSettings {

  static DEFAULT_CODE_LENGTH = 4;
  static DEFAULT_CODE_MAXIMUM_DIGIT = 5;
  static DEFAULT_MAXIMUM_GUESS_COUNT = 10;

  constructor(codeLength = GameSettings.DEFAULT_CODE_LENGTH,
    codeMaximumDigit = GameSettings.DEFAULT_CODE_MAXIMUM_DIGIT,
    maximumGuessCount = GameSettings.DEFAULT_MAXIMUM_GUESS_COUNT) {
    this.codeLength = codeLength;
    this.codeMaximumDigit = codeMaximumDigit;
    this.maximumGuessCount = maximumGuessCount;
  }
}

const defaultSettings = new GameSettings();

export default defaultSettings;