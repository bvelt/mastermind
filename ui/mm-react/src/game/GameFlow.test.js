import GameFlow from './GameFlow';
import GameState from './GameState';

describe('GameFlow', () => {
  test('should not be active if code is not set', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    expect(flow.isActive()).toEqual(false);
  });
  test('should not be active if broken is true', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.broken = true;
    const flow = new GameFlow(state);
    expect(flow.isActive()).toEqual(false);
  });
  test('should not be active if no guesses remaining', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.broken = false;
    state.prevGuesses = Array(state.settings.maximumGuessCount).fill(1);
    const flow = new GameFlow(state);
    expect(flow.isActive()).toEqual(false);
  });
  test('should be a success if broken is true', () => {
    const state = new GameState();
    state.broken = true;
    const flow = new GameFlow(state);
    expect(flow.isSuccess()).toEqual(true);
  });
  test('should be a failure if not broken and no guesses remaining', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.broken = false;
    state.prevGuesses = Array(state.settings.maximumGuessCount).fill(1);
    const flow = new GameFlow(state);
    expect(flow.isFailure()).toEqual(true);
  });
  test('should update state after checking guess', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.nextGuess = state.code;
    const flow = new GameFlow(state);
    flow.checkGuess();
    expect(flow.state.broken).toEqual(true);
    expect(flow.state.nextGuess).toEqual([]);
    expect(flow.state.prevGuesses).toEqual([state.code]);
    expect(flow.state.prevAnswers).toEqual([[4, 0]]);
  });
  test('should remove guess token', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.nextGuess = state.code;
    const flow = new GameFlow(state);
    flow.removeGuessToken();
    expect(flow.state.nextGuess).toEqual(state.code.slice(0, 3));
  });
  test('should append guess token', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    const flow = new GameFlow(state);
    flow.appendGuessToken(1);
    expect(flow.state.nextGuess).toEqual([1]);
  });
  test('should create new game', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    state.nextGuess = state.code;
    const flow = new GameFlow(state);
    flow.checkGuess();
    flow.newGame();
    expect(flow.state.code).toHaveLength(4);
    expect(flow.state.nextGuess).toEqual([]);
    expect(flow.state.prevGuesses).toEqual([]);
    expect(flow.state.prevAnswers).toEqual([]);
    expect(flow.state.broken).toEqual(false);
  });
  test('should create random guess', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.randomGuess();
    expect(flow.state.nextGuess).toHaveLength(4);
  });
  test('should reset guess', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.randomGuess();
    flow.resetGuess();
    expect(flow.state.nextGuess).toHaveLength(0);
    expect(() => flow.resetGuess()).toThrow();
  });
  test('should remove code token', () => {
    const state = new GameState();
    state.code = [0, 1, 2, 3];
    const flow = new GameFlow(state);
    flow.removeCodeToken();
    expect(flow.state.code).toEqual([0, 1, 2]);
  });
  test('should create random code', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.randomCode();
    expect(flow.state.code).toHaveLength(4);
  });
  test('should reset code', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.randomCode();
    flow.resetCode();
    expect(flow.state.code).toHaveLength(0);
    expect(() => flow.resetCode()).toThrow();
  });
  test('should save random code', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.randomCode();
    flow.saveCode();
    expect(flow.state.code).toHaveLength(4);
  });
  test('should append code item', () => {
    const state = new GameState();
    const flow = new GameFlow(state);
    flow.appendCodeToken(1);
    expect(flow.state.code).toEqual([1]);
  });
});