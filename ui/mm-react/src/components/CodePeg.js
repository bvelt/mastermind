import React from 'react';
import PropTypes from 'prop-types';
import './CodePeg.css';

class CodePeg extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    isClickable: PropTypes.bool,
    onClick: PropTypes.func
  };

  static COLORS = ['blue', 'green', 'orange', 'purple', 'red', 'yellow', 'empty'];
  static EMPTY_VALUE = 6;

  static defaultValue() {
    return CodePeg.EMPTY_VALUE;
  }

  static colors(includeEmpty = false) {
    const last = includeEmpty ? CodePeg.EMPTY_VALUE + 1 : CodePeg.EMPTY_VALUE;
    return CodePeg.COLORS.slice(0, last);
  }

  static colorOf(value) {
    return CodePeg.COLORS[value];
  }

  render() {
    const {
      value = CodePeg.EMPTY_VALUE,
      isClickable = false,
      onClick = () => false
    } = this.props;
    const color = CodePeg.colorOf(value);
    return (
      <span
        className={`codePeg codePeg__${color} ${isClickable ? 'codePeg__selectable' : ''}`}
        onClick={isClickable ? () => onClick(value) : () => false}></span>
    );
  }
}

export default CodePeg;