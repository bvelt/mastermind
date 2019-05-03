import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodePegList from '../components/CodePegList';
import CodePeg from '../components/CodePeg';
import KeyPeg from '../components/KeyPeg';
import DecodeGrid from '../components/DecodeGrid';
import Button from '../components/Button';
import * as actions from '../actions/ActionCreators';
import './DecodeEditor.css';

class DecodeEditor extends React.Component {

  static propTypes = {
    code: PropTypes.array,
    nextGuess: PropTypes.array,
    maximumGuessCount: PropTypes.number,
    length: PropTypes.number,
    prevGuesses: PropTypes.array,
    prevKeys: PropTypes.array,
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
      maximumGuessCount,
      length,
      nextGuess,
      prevGuesses,
      prevKeys,
      broken
    } = this.props;

    let gs = Array.from(prevGuesses);
    let ks = Array.from(prevKeys);

    const active = !broken && prevGuesses.length < maximumGuessCount;
    let message = "You broke the code!";

    if (!active && !broken) {
      gs.push(code);
      ks.push(Array(length).fill(0));
      message = "Bummer. You failed.";
    } else if (active) {
      gs.push(this.padRight(nextGuess, length, CodePeg.defaultValue()));
      ks.push(Array(length).fill(KeyPeg.defaultValue()));
    }

    while (gs.length < maximumGuessCount) {
      gs.push(Array(length).fill(CodePeg.defaultValue()));
      ks.push(Array(length).fill(KeyPeg.defaultValue()));
    }

    let newGameButton = '';
    if (!active) {
      newGameButton = (
        <div className="gameover">
          <div className="clearfix">
            <div className="buttons">
              <Button key={7} label="TRY AGAIN" onClick={this.handleNewGame}></Button>
            </div>
            <div className="message">
              <span className="emoji" role="img" 
                aria-label="Face">{broken === true ? '😃' : '🙁'}</span>
              <span className="text">{message}</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="decodeEditor">
        <div className="clearfix">
          <DecodeGrid key={6}
            remainingGuessCount={maximumGuessCount - prevGuesses.length}
            guesses={gs}
            keys={ks}></DecodeGrid>
          <CodePegList key={1} values={[...CodePeg.colors().keys()]}
            isSelectable={active && nextGuess.length < length}
            onSelect={this.handleSelect}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
            onRandom={this.handleRandom}
            onReset={this.handleReset}></CodePegList>
        </div>
        {newGameButton}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.code,
    nextGuess: state.nextGuess,
    maximumGuessCount: state.settings.maximumGuessCount,
    length: state.settings.codeLength,
    prevGuesses: state.prevGuesses,
    prevKeys: state.prevKeys,
    broken: state.broken
  };
}

export default connect(mapStateToProps)(DecodeEditor);