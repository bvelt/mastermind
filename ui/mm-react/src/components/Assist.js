import React from 'react';
import PropTypes from 'prop-types';
import GameCombinatorics from '../game/GameCombinatorics';
import CodePeg from './CodePeg';
import './Assist.css';

class Assist extends React.Component {
  static propTypes = {
    possibleCodes: PropTypes.array
  };

  render() {
    const {
      possibleCodes = []
    } = this.props;

    const comb = new GameCombinatorics();
    const pivot = comb.pivot(possibleCodes);
    const rows = [];
    for (let i = 0; i < pivot.length; i++) {
      rows.push((
        <tr key={i + 1}>
          <td key="0"><CodePeg value={i}></CodePeg></td>
          {pivot[i].map((x, j) =>
            (<td key={j + 1}>{x}</td>)
          )}
        </tr>
      ));
    }

    const maxrows = 100;
    const lis = [];
    for (let i = 0; i < possibleCodes.length && i < maxrows; i++) {
      lis.push((
        <li key={i}>
          {possibleCodes[i].map((x, j) =>
            (<span key={j} className={`codePeg codePeg__${CodePeg.colorOf(x)}`}></span>)
          )}
        </li>
      ));
    }

    return (
      <div className="assist">
        <div>
          <h2>Possible codes with color at index</h2>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>(1,4)</td>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        <div>
          <h2>{Math.min(possibleCodes.length, 100)}/{possibleCodes.length} of possible codes</h2>
          <ul>
            {lis}
          </ul>
        </div>
      </div>
    );
  }
}

export default Assist;