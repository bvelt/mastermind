import React from 'react';
import PropTypes from 'prop-types';
import CodeMaker from '../game/CodeMaker';
import CodeBreaker from '../game/CodeBreaker';
import CodePegList from './CodePegList';
import CodePeg from './CodePeg';
import KeyPeg from './KeyPeg';
import DecodeGrid from './DecodeGrid';
import Button from './Button';

import './DecodeEditor.css';

class DecodeEditor extends React.Component {

  static propTypes = {
    code: PropTypes.array,
    maximumGuessCount: PropTypes.number,
    onDecodeDone: PropTypes.func
  };

  static getDerivedStateFromProps(props, state) {
    if (props.code !== state.code) {
      return DecodeEditor.initialState(props.code);
    }
    return state;
  }

  static initialState(code) {
    return ({
      code: code,
      currentGuess: Array(code.length).fill(CodePeg.defaultValue()),
      currentIndex: 0,
      guesses: [],
      keys: [],
      guessCount: 0,
      broken: false
    });
  }

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.codeMaker = new CodeMaker();
    this.state = DecodeEditor.initialState(this.props.code || this.codeMaker.createRandomly());
  }

  handleSelect(value) {
    const {
      currentIndex
    } = this.state;
    if (currentIndex < this.codeMaker.length) {
      this.setState(prevState => {
        let nextState = Object.assign({}, prevState);
        nextState.currentGuess[currentIndex] = value;
        nextState.currentIndex++;
        return nextState;
      });
    }
  }

  handleDelete() {
    const {
      currentIndex
    } = this.state;
    if (currentIndex > 0) {
      this.setState(prevState => {
        let nextState = Object.assign({}, prevState);
        nextState.currentGuess[currentIndex - 1] = CodePeg.defaultValue();
        nextState.currentIndex--;
        return nextState;
      });
    }
  }

  handleReset() {
    const {
      currentIndex
    } = this.state;
    if (currentIndex > 0) {
      this.setState(prevState => {
        let nextState = Object.assign({}, prevState);
        nextState.currentGuess = Array(this.codeMaker.length).fill(CodePeg.defaultValue());
        nextState.currentIndex = 0;
        return nextState;
      });
    }
  }

  handleRandom() {
    const randomCode = this.codeMaker.createRandomly();
    this.setState(prevState => {
      let nextState = Object.assign({}, prevState);
      nextState.currentGuess = randomCode;
      nextState.currentIndex = randomCode.length;
      return nextState;
    });
  }

  handleCheck() {
    const {
      maximumGuessCount,
      onDecodeDone
    } = this.props;
    let {
      code,
      currentGuess,
      guesses,
      keys,
      guessCount,
      broken
    } = this.state;

    if (!broken && guessCount++ < maximumGuessCount) {
      const breaker = new CodeBreaker(code);
      const results = breaker.makeGuess(currentGuess);
      const matches = results.matches;
      while (matches.length < code.length) {
        matches.push(KeyPeg.emptyValue());
      }

      this.setState({
        code: code,
        currentGuess: Array(code.length).fill(CodePeg.defaultValue()),
        currentIndex: 0,
        guesses: guesses.concat(currentGuess),
        keys: keys.concat(matches),
        guessCount: guessCount,
        broken: results.broken
      });

      if (results.broken === true) {
        onDecodeDone(true, guessCount);
      } else if (guessCount >= maximumGuessCount) {
        onDecodeDone(false, guessCount);
      }
    }
  }

  render() {
    const {
      maximumGuessCount
    } = this.props;
    let {
      code,
      currentGuess,
      currentIndex,
      guesses,
      keys,
      guessCount,
      broken
    } = this.state;

    let gridGuesses = guesses;
    let gridKeys = keys;

    const active = !broken && guessCount < maximumGuessCount;

    if (!active && !broken) {
      gridGuesses = gridGuesses.concat(code);
      gridKeys = gridKeys.concat(Array(code.length).fill(0));
    } else if (active) {
      gridGuesses = gridGuesses.concat(currentGuess);
      gridKeys = gridKeys.concat(Array(code.length).fill(KeyPeg.defaultValue()));
    }

    return (
      <div className="decodeEditor">
        <CodePegList key={1} values={[...CodePeg.colors().keys()]}
          isSelectable={active && currentIndex < code.length}
          onSelect={this.handleSelect}></CodePegList>
        <Button key={2} label="Random"
          isDisabled={!active}
          onClick={this.handleRandom}></Button>
        <Button key={3} label="Reset"
          isDisabled={!active || currentIndex === 0}
          onClick={this.handleReset}></Button>
        <Button key={4} label="Delete"
          isDisabled={!active || currentIndex === 0}
          onClick={this.handleDelete}></Button>
        <Button key={5} label="Check"
          isDisabled={!active || currentIndex < code.length}
          onClick={this.handleCheck}></Button>
        <DecodeGrid key={6} remainingGuessCount={maximumGuessCount - guessCount}
          codeValues={gridGuesses}
          keyValues={gridKeys}></DecodeGrid>
      </div>
    );
  }
}

export default DecodeEditor;