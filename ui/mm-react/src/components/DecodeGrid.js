import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import KeyPegGrid from './KeyPegGrid';
import './DecodeGrid.css';

class DecodeGrid extends React.Component {
  static propTypes = {
    remainingGuessCount: PropTypes.number,
    guesses: PropTypes.array,
    answers: PropTypes.array,
  };

  render() {
    const {
      remainingGuessCount = 0,
      guesses = [],
      answers = []
    } = this.props;

    const trs = [];
    for (let i = 0; i < guesses.length; i++) {
      const tds = [];

      tds.push(
        <td key={`h$(i}`} className="rowHead">{i + 1}</td>
      );

      for (let j = 0; j < guesses[i].length; j++) {
        tds.push(
          <td key={`cp${j}`}><CodePeg value={guesses[i][j]}></CodePeg></td>
        );
      }

      tds.push(
        <td key={`kg${i}`} className="keys">
          <KeyPegGrid answer={answers[i]} length={guesses[i].length}></KeyPegGrid>
        </td>
      );

      const solution = answers[i][0] === guesses[i].length;
      trs.push(
        <tr className={`decodeRow ${solution === true ? 'solution' : ''}`} key={i}>{tds}</tr>
      );
    }

    return (
      <div className="decodeGrid">
        <div className="caption">
          <span>{remainingGuessCount} guess{remainingGuessCount !== 1 ? 'es' : ''} remaining</span>
        </div>
        <table>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DecodeGrid;