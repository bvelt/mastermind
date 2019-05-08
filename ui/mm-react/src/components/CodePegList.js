import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import IconButton from './IconButton';
import './CodePegList.css';

class CodePegList extends React.Component {
  static propTypes = {
    values: PropTypes.array,
    isSelectable: PropTypes.bool,
    onSelect: PropTypes.func,
    onCheck: PropTypes.func,
    onDelete: PropTypes.func,
    onRandom: PropTypes.func,
    onReset: PropTypes.func
  };

  render() {
    const {
      values = [...CodePeg.colors().keys()],
      isSelectable = false,
      onSelect = () => false,
      onCheck = () => false,
      onDelete = () => false,
      onRandom = () => false,
      onReset = () => false
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
      <div className="codePegList">
        <ul className="picker">
          {items}
          <li key={values.length} className={'check'}>
            <IconButton icon={'check'}
              isDisabled={isSelectable}
              onClick={onCheck}></IconButton>
          </li>
        </ul>
        <ul className="buttons">
          <li>
            <IconButton icon={'random'}
              onClick={onRandom}></IconButton>
          </li>
          <li>
            <IconButton icon={'delete'}
              onClick={onDelete}></IconButton>
          </li>
          <li>
            <IconButton icon={'reset'}
              onClick={onReset}></IconButton>
          </li>
        </ul>
      </div>
    );
  }
}

export default CodePegList;