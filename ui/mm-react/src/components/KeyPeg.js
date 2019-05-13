import React from 'react';
import PropTypes from 'prop-types';
import './KeyPeg.css';

class KeyPeg extends React.Component {
  static propTypes = {
    value: PropTypes.number
  };

  static NAMES = ['position', 'color', 'none']

  static defaultValue() {
    return KeyPeg.NAMES.indexOf('none');
  }

  static valueOf(name) {
    return KeyPeg.NAMES.indexOf(name);
  }

  render() {
    const {
      value = KeyPeg.defaultValue()
    } = this.props;

    return (
      <span className={`keyPeg keyPeg__${KeyPeg.NAMES[value]}`}></span>
    );
  }
}

export default KeyPeg;