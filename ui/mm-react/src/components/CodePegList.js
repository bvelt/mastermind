import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import './CodePegList.css';

class CodePegList extends React.Component {
  static propTypes = {
    values: PropTypes.array,
    isSelectable: PropTypes.bool,
    onSelect: PropTypes.func
  };

  render() {
    const {
      values = [...CodePeg.colors().keys()],
      isSelectable = false,
      onSelect = () => false
    } = this.props;

    let items = [];
    for (let i = 0; i < values.length; i++) {
      items.push(
        <li key={i}>
          <CodePeg value={values[i]}
            isClickable={isSelectable}
            onClick={onSelect}></CodePeg>
        </li>
      );
    }

    return (
      <ul className="codePegList">{items}</ul>
    );
  }
}

export default CodePegList;