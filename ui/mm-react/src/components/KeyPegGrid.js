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
      values = Array(4).fill(KeyPeg.defaultValue())
    } = this.props;

    const rows = [];
    for (let i = 0; i < values.length; i += 2) {
      rows.push(
        <tr key={i}>
          <td><KeyPeg value={values[i]}></KeyPeg></td>
          <td><KeyPeg value={values[i + 1]}></KeyPeg></td>
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