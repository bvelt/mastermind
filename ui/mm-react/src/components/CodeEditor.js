import React from 'react';
import PropTypes from 'prop-types';
import CodePeg from './CodePeg';
import Button from './Button';
import CodePegList from './CodePegList';
import CodeMaker from '../game/CodeMaker';
import './CodeEditor.css';

class CodeEditor extends React.Component {

  static propTypes = {
    doneLabel: PropTypes.string,
    onCodeDone: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleCodePegClick = this.handleCodePegClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.codeMaker = new CodeMaker();
    this.initialState = () => {
      return {
        values: Array(this.codeMaker.length).fill(CodePeg.EMPTY_VALUE),
        currentIndex: 0
      }
    };
    this.state = this.initialState();
  }

  handleCodePegClick(value) {
    let {
      values,
      currentIndex
    } = this.state;
    if (currentIndex < this.codeMaker.length) {
      values[currentIndex] = value;
      currentIndex++;
      this.setState({
        values: values,
        currentIndex: currentIndex
      });
    }
  }

  handleDelete() {
    let {
      values,
      currentIndex
    } = this.state;
    if (currentIndex > 0) {
      currentIndex--;
      values[currentIndex] = CodePeg.EMPTY_VALUE;
      this.setState({
        values: values,
        currentIndex: currentIndex
      });
    }
  }

  handleReset() {
    this.setState(this.initialState());
  }

  handleRandom() {
    const code = this.codeMaker.createRandomly();
    this.setState({
      values: code,
      currentIndex: code.length
    });
  }

  handleDone() {
    const {
      onCodeDone
    } = this.props;
    const {
      values
    } = this.state;
    const code = this.codeMaker.createManually(values);
    const newValues = onCodeDone(code);
    if (newValues) {
      this.setState({
        values: newValues,
        currentIndex: 0
      });
    }
  }

  render() {
    const {
      doneLabel = 'Done'
    } = this.props;
    const {
      values,
      currentIndex
    } = this.state;
    return (
      <div className='codeEditor'>
        <CodePegList values={[...CodePeg.colors().keys()]}
          isSelectable={currentIndex < this.codeMaker.length}
          onSelect={this.handleCodePegClick}></CodePegList>
        <CodePegList values={values}></CodePegList>
        <Button label="Random"
          onClick={this.handleRandom}></Button>
        <Button label="Reset"
          isDisabled={currentIndex === 0}
          onClick={this.handleReset}></Button>
        <Button label="Delete"
          isDisabled={currentIndex === 0}
          onClick={this.handleDelete}></Button>
        <Button label={doneLabel}
          isDisabled={currentIndex < this.codeMaker.length}
          onClick={this.handleDone}></Button>
      </div>
    );
  }
}

export default CodeEditor;