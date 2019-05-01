import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodePeg from '../components/CodePeg';
import Button from '../components/Button';
import CodePegList from '../components/CodePegList';
import * as actions from '../actions/ActionCreators';
import './CodeEditor.css';

class CodeEditor extends React.Component {

  static propTypes = {
    onCodeDone: PropTypes.func,
    length: PropTypes.number,
    values: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.handleCodePegClick = this.handleCodePegClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleCodePegClick(value) {
    const {
      values,
      length,
      dispatch
    } = this.props;
    if (values.length < length) {
      dispatch(actions.appendCodeToken(value));
    }
  }

  handleDelete() {
    const {
      values,
      dispatch
    } = this.props;
    if (values.length !== 0) {
      dispatch(actions.removeCodeToken());
    }
  }

  handleReset() {
    const {
      values,
      dispatch
    } = this.props;
    if (values.length > 0) {
      dispatch(actions.resetCode());
    }
  }

  handleRandom() {
    const {
      dispatch
    } = this.props;
    dispatch(actions.randomCode());
  }

  handleDone() {
    const {
      values,
      dispatch,
      onCodeDone
    } = this.props;
    dispatch(actions.saveCode());
    onCodeDone(values);
  }

  render() {
    const {
      values,
      length
    } = this.props;

    const paddedValues = Array.from(values);
    while (paddedValues.length < length) {
      paddedValues.push(CodePeg.defaultValue());
    }

    return (
      <div className='codeEditor'>
        <p>Create a secret pattern of {length} four colored pegs</p>
        <CodePegList values={[...CodePeg.colors().keys()]}
          isSelectable={values.length < length}
          onSelect={this.handleCodePegClick}></CodePegList>
        <CodePegList values={paddedValues}></CodePegList>
        <Button label="Random"
          onClick={this.handleRandom}></Button>
        <Button label="Reset"
          isDisabled={values.length === 0}
          onClick={this.handleReset}></Button>
        <Button label="Delete"
          isDisabled={values.length === 0}
          onClick={this.handleDelete}></Button>
        <Button label="Save"
          isDisabled={values.length < length}
          onClick={this.handleDone}></Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.code,
    length: state.settings.codeLength
  };
}

export default connect(mapStateToProps)(CodeEditor);