import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import CodeEditor from './CodeEditor';
import gameReducers from '../reducers/Reducers';
import '../index.css';

storiesOf('CodeEditor', module)
  .addDecorator(withKnobs)
  .add('with default settings', () => {
    return (
      <Provider store={createStore(gameReducers)}>
        <CodeEditor onCodeDone={code => action('onCodeDone')(code)}></CodeEditor>
      </Provider>
    );
  });   
