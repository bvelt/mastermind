import React from 'react';
import PropTypes from 'prop-types';
import GameCombinatorics from '../game/GameCombinatorics';
import CodePeg from './CodePeg';
import IconButton from './IconButton';
import './Assist.css';

class Assist extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
    onToggle: PropTypes.func,
    possibleCodes: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      opened: props.opened || false
    };
  }

  handleToggle() {
    const {
      onToggle = () => false
    } = this.props;
    const {
      opened
    } = this.state;
    const nextOpened = opened === false;
    this.setState(() => {
      return Object.assign({}, this.state,
        { opened: nextOpened });
    });
    onToggle(nextOpened);
  }

  render() {
    const {
      possibleCodes = []
    } = this.props;
    const {
      opened
    } = this.state;

    const comb = new GameCombinatorics();
    const pivot = comb.pivot(possibleCodes);
    const rows = [];
    for (let i = 0; i < pivot.length; i++) {
      rows.push((
        <tr key={i + 1}>
          <td key="0"><CodePeg value={i}></CodePeg></td>
          {pivot[i].map((x, j) =>
            (<td key={j + 1}>{x}</td>)
          )}
        </tr>
      ));
    }

    const maxCodes = 50;
    const lis = [];
    for (let i = 0; i < possibleCodes.length && i < maxCodes; i++) {
      lis.push((
        <li key={i}>
          {possibleCodes[i].map((x, j) =>
            (<span key={j} className={`codePeg codePeg__${CodePeg.colorOf(x)}`}></span>)
          )}
        </li>
      ));
    }

    return (
      <div className="assistWrap">
        <div className={`${opened === false ? 'toggleButton' : 'toggleHidden'}`}>
          {opened === false ?
            <IconButton icon={'info'} onClick={this.handleToggle}></IconButton> : ''}
        </div>
        <div className={`assist ${opened === false ? 'closed' : ''}`}>
          <table>
            <thead>
              <tr>
                <td>COLOR</td>
                <td><CodePeg></CodePeg></td>
                <td><CodePeg></CodePeg></td>
                <td><CodePeg></CodePeg></td>
                <td><CodePeg></CodePeg></td>
                <td>TOTAL</td>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan="5">Possible codes remaining:</td>
                <td>{possibleCodes.length}</td>
              </tr>
            </tfoot>
          </table>
          <ul className="possible">
            {lis}
          </ul>
        </div>
        {opened === true ?
          (<div className="toggleButton">
            <IconButton icon={'close'} onClick={this.handleToggle}></IconButton>
          </div>) : ''}
      </div>
    );
  }
}

export default Assist;