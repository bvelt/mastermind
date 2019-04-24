import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import CodePeg from './CodePeg';
import CodeEditor from './CodeEditor';
import '../index.css';

storiesOf('CodeEditor', module)
  .addDecorator(withKnobs)
  .add('maker (default)', () => {
    return (<CodeEditor doneLabel="Save" onCodeDone={action('onCodeDone')}></CodeEditor>);
  })
  .add('breaker', () => {
    const emptyCode = Array(4).fill(CodePeg.defaultValue());
    const doneFn = code => {
      action('onCodeDone')(code);
      return emptyCode;
    };
    return (<CodeEditor doneLabel="Check" onCodeDone={doneFn}></CodeEditor>);
  });   
