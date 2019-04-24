import React from 'react';
import PropTypes from 'prop-types';
import CodeMaker from '../game/CodeMaker';
import DecodeEditor from './DecodeEditor';
import Button from './Button';
import Rules from './Rules';
import './SinglePlayer.css';

class SinglePlayer extends React.Component {

  static modes = [
    'Guess secret pattern of four colored pegs',
    'Gameover',
  ];

  static propTypes = {
    maximumGuessCount: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.onDecodeDone = this.onDecodeDone.bind(this);
    this.onNewGame = this.onNewGame.bind(this);
    this.maker = new CodeMaker();
    const {
      code = this.maker.createRandomly(),
      mode = 0
    } = this.props;
    this.state = {
      code: code,
      mode: mode,
      results: []
    };
  }

  onNewGame() {
    const {
      mode,
      results
    } = this.state;
    if (mode === 1) {
      this.setState({
        code: this.maker.createRandomly(),
        mode: 0,
        results: results
      });
    }
  }

  onDecodeDone(broken, guessCount) {
    const {
      code,
      mode,
      results
    } = this.state;
    if (mode === 0) {
      this.setState({
        code: code,
        mode: 1,
        results: results.concat({ broken: broken, guessCount: guessCount })
      });
    }
  }

  gameoverMessage(result) {
    if (result.broken === true) {
      return `Congratulations! You broke the code in ${result.guessCount} guess${result.guessCount > 1 ? 'es' : ''}.`
    } else {
      return `Bummer. You failed to break the code.`
    }
  }

  render() {
    const {
      maximumGuessCount = 10
    } = this.props;
    const {
      code,
      mode,
      results
    } = this.state;

    let body = [
      <DecodeEditor key={1} code={code}
        maximumGuessCount={maximumGuessCount}
        onDecodeDone={this.onDecodeDone}>
      </DecodeEditor>
    ];

    if (mode === 1) {
      const result = results[results.length - 1];
      body.push(
        <div key={2} className="gameover">
          <p>{this.gameoverMessage(result)}</p>
          <Button label="New Game" onClick={this.onNewGame}></Button>
        </div>
      );
    }

    return (
      <div className="singlePlayer clearfix">
        <div className="column sidebar">
          <Rules></Rules>
        </div>
        <div className="column main">
          <p>{SinglePlayer.modes[mode]}</p>
          {body}
        </div>
      </div>
    );
  }
}

export default SinglePlayer;