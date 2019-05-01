import defaultSettings from './GameSettings';

class GameState {
  constructor(settings = defaultSettings, code = [], nextGuess = [], prevGuesses = [], prevKeys = [], broken = false) {
    this.settings = settings;
    this.code = code;
    this.nextGuess = nextGuess;
    this.prevGuesses = prevGuesses;
    this.prevKeys = prevKeys;
    this.broken = broken;
  }
}

export default GameState;