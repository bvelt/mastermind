import React from 'react';
import CodeMaker from '../game/CodeMaker';
import CodePegList from './CodePegList';
import './Header.css';

class Header extends React.Component {
  render() {
    const maker = new CodeMaker();
    return (
      <div className="header clearfix">
        <h1>Mastermind</h1>
        <CodePegList values={maker.createRandom()}></CodePegList>
      </div>
    );
  }
}

export default Header;