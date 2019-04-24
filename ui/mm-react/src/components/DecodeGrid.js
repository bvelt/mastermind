import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import KeyPegGrid from './KeyPegGrid';
import './DecodeGrid.css';

class DecodeGrid extends React.Component {
  static propTypes = {
    remainingGuessCount: PropTypes.number,
    codeValues: PropTypes.array,
    keyValues: PropTypes.array,
  };

  render() {
    const {
      remainingGuessCount = 0,
      codeValues = [],
      keyValues = []
    } = this.props;

    const trs = [];
    for (let i = 0; i < codeValues.length; i = i + 4) {
      let tds = [];

      let rowCodeValues = codeValues.slice(i, i + 4);
      for (let j = 0; j < rowCodeValues.length; j++) {
        tds.push(
          <td key={`c${i + j}`}><CodePeg value={rowCodeValues[j]}></CodePeg></td>
        );
      }

      let rowKeyValues = keyValues.slice(i, i + 4);
      tds.push(
        <td key={`k${i}`} className="keys"><KeyPegGrid values={rowKeyValues}></KeyPegGrid></td>
      );

      const solution = rowKeyValues.every(key => key === 0);
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