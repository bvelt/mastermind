import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="logo" alt="Logo" src="assets/Logo.png" />
      </div>
    );
  }
}

export default Header;