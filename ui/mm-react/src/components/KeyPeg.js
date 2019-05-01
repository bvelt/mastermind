import React from 'react';
import PropTypes from 'prop-types';
import './KeyPeg.css';

class KeyPeg extends React.Component {
  static propTypes = {
    value: PropTypes.number
  };

  static KEY_NAMES = ['position', 'color', 'none']

  static defaultValue() {
    return KeyPeg.KEY_NAMES.indexOf('none');
  }

  render() {
    const {
      value = KeyPeg.defaultValue()
    } = this.props;

    return (
      <span className={`keyPeg keyPeg__${KeyPeg.KEY_NAMES[value]}`}></span>
    );
  }
}

export default KeyPeg;