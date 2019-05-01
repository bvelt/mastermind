import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import KeyPegGrid from './KeyPegGrid';
import './DecodeGrid.css';

class DecodeGrid extends React.Component {
  static propTypes = {
    remainingGuessCount: PropTypes.number,
    guesses: PropTypes.array,
    keys: PropTypes.array,
  };

  render() {
    const {
      remainingGuessCount = 0,
      guesses = [],
      keys = []
    } = this.props;

    const trs = [];
    for (let i = 0; i < guesses.length; i++) {
      const tds = [];

      for (let j = 0; j < guesses[i].length; j++) {
        tds.push(
          <td key={`cp${j}`}><CodePeg value={guesses[i][j]}></CodePeg></td>
        );
      }

      tds.push(
        <td key={`kg${i}`} className="keys"><KeyPegGrid values={keys[i]}></KeyPegGrid></td>
      );

      const solution = keys[i].every(key => key === 0);
      trs.push(
        <tr className={solution === true ? 'solution' : ''} key={i}>{tds}</tr>
      );
    }

    return (
      <table className="decodeGrid">
        <caption>{remainingGuessCount} guess{remainingGuessCount !== 1 ? 'es' : ''} remaining</caption>
        <tbody>
          {trs}
        </tbody>
      </table>
    );
  }
}

export default DecodeGrid;