import React from 'react';
import './Rules.css';

class Rules extends React.Component {

  constructor(props) {
    super(props);
    this.toggleRules = this.toggleRules.bind(this);
    this.state = {
      open: false
    };
  }

  toggleRules() {
    const {
      open
    } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const {
      open
    } = this.state;
    return (
      <div className="rules">
        <span className="rulesToggle" onClick={this.toggleRules}>{open ? 'Hide' : 'Show'} Rules</span>
        <p className={open ? 'Show' : 'Hide'}>A codemaker has created a secret pattern of 4 colored pegs. Guess the pegs within 10 turns. A black peg is returned for each peg in your guess that matches the color and position of one peg in the pattern. A white peg is returned for each peg that is the correct color of one peg in the pattern but the incorrect position. A match is counted only once.</p>
      </div>
    );
  }
}

export default Rules;
