import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

class IconButton extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  static ICONS = ['check', 'delete', 'random', 'reset'];

  render() {
    const {
      icon,
      isDisabled = false,
      onClick = () => false
    } = this.props;
    return (
      <button type={'button'}
        title={icon}
        className={`iconButton ${icon} ${isDisabled ? 'iconButton__disabled' : ''}`}
        disabled={isDisabled}
        onClick={!isDisabled ? onClick : () => false}>
        <img src={`assets/${icon}.png`} alt={icon}/>
      </button>
    );
  }
}

export default IconButton;