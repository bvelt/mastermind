import React from 'react';
import PropTypes from 'prop-types';
import KeyPeg from './KeyPeg';
import './KeyPegGrid.css';

class KeyPegGrid extends React.Component {
  static propTypes = {
    length: PropTypes.number,
    answer: PropTypes.array
  };

  render() {
    let {
      answer: [position, color] = [0, 0],
      length = 4
    } = this.props;

    const values = Array(length).fill(KeyPeg.defaultValue());
    while (color-- > 0) {
      values.unshift(KeyPeg.valueOf('color'));
    }
    while (position-- > 0) {
      values.unshift(KeyPeg.valueOf('position'));
    }

    const items = [];
    for (let i = 0; i < length; i++) {
      items.push(
        <li key={i}><KeyPeg value={values[i]}></KeyPeg></li>
      );
    }

    return (
      <ul className="keyPegGrid">
        {items}
      </ul>
    );
  }
}

export default KeyPegGrid;