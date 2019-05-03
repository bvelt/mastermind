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

      tds.push(
        <td key={`h$(i}`} className="rowHead">{i + 1}</td>
      );

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
        <tr className={`decodeRow ${solution === true ? 'solution' : ''}`} key={i}>{tds}</tr>
      );
    }

    return (
      <div className="decodeGrid">
        <p className="caption">{remainingGuessCount} guess{remainingGuessCount !== 1 ? 'es' : ''} remaining</p>
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