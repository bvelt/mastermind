import React from 'react';
import PropTypes from 'prop-types';
import './KeyPeg.css';

class KeyPeg extends React.Component {
  static propTypes = {
    value: PropTypes.number
  };

  static MATCH_TYPE = ['position', 'color', 'none']

  static defaultValue() {
    return KeyPeg.MATCH_TYPE.indexOf('none');
  }

  render() {
    const {
      value = KeyPeg.defaultValue()
    } = this.props;

    return (
      <span className={`keyPeg keyPeg__${KeyPeg.MATCH_TYPE[value]}`}></span>
    );
  }
}

export default KeyPeg;