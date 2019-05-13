import defaultSettings from './GameSettings';

class GameState {
  constructor(settings = defaultSettings, code = [], nextGuess = [], prevGuesses = [], prevAnswers = [], broken = false) {
    this.settings = settings;
    this.code = code;
    this.nextGuess = nextGuess;
    this.prevGuesses = prevGuesses;
    this.prevAnswers = prevAnswers;
    this.broken = broken;
  }
}

export default GameState;