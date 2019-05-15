import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodePegList from '../components/CodePegList';
import CodePeg from '../components/CodePeg';
import DecodeGrid from '../components/DecodeGrid';
import Button from '../components/Button';
import * as actions from '../actions/ActionCreators';
import './DecodeEditor.css';
import Assist from '../components/Assist';

class DecodeEditor extends React.Component {

  static propTypes = {
    code: PropTypes.array,
    possibleCodes: PropTypes.array,
    nextGuess: PropTypes.array,
    maximumGuessCount: PropTypes.number,
    length: PropTypes.number,
    prevGuesses: PropTypes.array,
    prevAnswers: PropTypes.array,
    onDecodeDone: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleSelect(value) {
    const {
      nextGuess,
      length,
      dispatch
    } = this.props;
    if (nextGuess.length < length) {
      dispatch(actions.appendGuessToken(value));
    }
  }

  handleDelete() {
    const {
      nextGuess,
      dispatch
    } = this.props;
    if (nextGuess.length > 0) {
      dispatch(actions.removeGuessToken());
    }
  }

  handleReset() {
    const {
      nextGuess,
      dispatch
    } = this.props;
    if (nextGuess.length > 0) {
      dispatch(actions.resetGuess());
    }
  }

  handleRandom() {
    const {
      dispatch
    } = this.props;
    dispatch(actions.randomGuess());
  }

  handleCheck() {
    const {
      maximumGuessCount,
      prevGuesses,
      nextGuess,
      length,
      dispatch
    } = this.props;
    if (nextGuess.length === length && prevGuesses.length < maximumGuessCount) {
      dispatch(actions.checkGuess());
    }
  }

  handleNewGame() {
    const {
      dispatch
    } = this.props;
    dispatch(actions.newGame());
  }

  padRight(items, length, value) {
    const padded = Array.from(items);
    while (padded.length < length) {
      padded.push(value);
    }
    return padded;
  }

  render() {
    const {
      code,
      possibleCodes,
      maximumGuessCount,
      length,
      nextGuess,
      prevGuesses,
      prevAnswers,
      broken
    } = this.props;

    let guesses = Array.from(prevGuesses);
    let answers = Array.from(prevAnswers);

    const active = !broken && prevGuesses.length < maximumGuessCount;
    let message = "You broke the code!";

    if (!active && !broken) {
      guesses.push(code);
      answers.push([4, 0]);
      message = "Bummer. You failed.";
    } else if (active) {
      guesses.push(this.padRight(nextGuess, length, CodePeg.defaultValue()));
      answers.push([0, 0]);
    }

    while (guesses.length < maximumGuessCount) {
      guesses.push(Array(length).fill(CodePeg.defaultValue()));
      answers.push([0, 0]);
    }

    let newGameButton = '';
    if (!active) {
      newGameButton = (
        <div className="gameover">
          <div className="clearfix">
            <div className="message">
              <span className="emoji" role="img"
                aria-label="Face">{broken === true ? '😃' : '🙁'}</span>
              <span className="text">{message}</span>
            </div>
            <div className="buttons">
              <Button key={7} label="TRY AGAIN" onClick={this.handleNewGame}></Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="decodeEditor">
        <div className="clearfix">
          <CodePegList key={1} values={[...CodePeg.colors().keys()]}
            isSelectable={active && nextGuess.length < length}
            onSelect={this.handleSelect}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
            onRandom={this.handleRandom}
            onReset={this.handleReset}></CodePegList>
          <DecodeGrid key={6}
            remainingGuessCount={maximumGuessCount - prevGuesses.length}
            guesses={guesses}
            answers={answers}></DecodeGrid>
          <Assist possibleCodes={possibleCodes}></Assist>
        </div>
        {newGameButton}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.code,
    possibleCodes: state.possibleCodes,
    nextGuess: state.nextGuess,
    maximumGuessCount: state.settings.maximumGuessCount,
    length: state.settings.codeLength,
    prevGuesses: state.prevGuesses,
    prevAnswers: state.prevAnswers,
    broken: state.broken
  };
}

export default connect(mapStateToProps)(DecodeEditor);