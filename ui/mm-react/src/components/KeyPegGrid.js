import React from 'react';
import PropTypes from 'prop-types';
import KeyPeg from './KeyPeg';
import './KeyPegGrid.css';

class KeyPegGrid extends React.Component {
  static propTypes = {
    values: PropTypes.array
  };

  render() {
    const {
      values = []
    } = this.props;

    const paddedValues = Array.from(values);
    while (paddedValues.length < 4) {
      paddedValues.push(KeyPeg.defaultValue());
    }

    const rows = [];
    for (let i = 0; i < paddedValues.length; i += 2) {
      rows.push(
        <tr key={i}>
          <td><KeyPeg value={paddedValues[i]}></KeyPeg></td>
          <td><KeyPeg value={paddedValues[i + 1]}></KeyPeg></td>
        </tr>
      );
    }

    return (
      <table className="keyPegGrid">
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default KeyPegGrid;