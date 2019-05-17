import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodePeg from '../components/CodePeg';
import CodePegList from '../components/CodePegList';
import * as actions from '../actions/ActionCreators';
import './CodeEditor.css';

class CodeEditor extends React.Component {

  static propTypes = {
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
      dispatch
    } = this.props;
    dispatch(actions.saveCode());
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
          onSelect={this.handleCodePegClick}
          onCheck={this.handleDone}
          onDelete={this.handleDelete}
          onRandom={this.handleRandom}
          onReset={this.handleReset}></CodePegList>
        <CodePegList values={paddedValues}></CodePegList>
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