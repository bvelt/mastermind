import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import DecodeEditor from './DecodeEditor';
import CodeMaker from '../game/CodeMaker';
import '../index.css';

const code = [0, 1, 2, 3];
const codeMaker = new CodeMaker();
const randomCode = codeMaker.createRandomly();

storiesOf('DecodeEditor', module)
  .addDecorator(withKnobs)
  .add(`with code ${code}`, () => {
    return (<DecodeEditor maximumGuessCount={10} 
        code={code} 
        onDecodeDone={(broken, guessCount) => action('onDecodeDone')(broken, guessCount)}></DecodeEditor>);
  })
  .add(`with random code ${randomCode}`, () => {
    return (<DecodeEditor maximumGuessCount={10} 
        code={randomCode} 
        onDecodeDone={(broken, guessCount) => action('onDecodeDone')(broken, guessCount)}></DecodeEditor>);
  });   
