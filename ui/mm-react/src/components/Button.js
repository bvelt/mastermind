import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  render() {
    const {
      label,
      isDisabled = false,
      onClick = () => false
    } = this.props;
    return (
      <button type={'button'}
      className={`button ${isDisabled ? 'button__disabled' : ''}`}
        disabled={isDisabled}
        onClick={!isDisabled ? onClick : () => false}>
        {label}
      </button>
    );
  }
}

export default Button;