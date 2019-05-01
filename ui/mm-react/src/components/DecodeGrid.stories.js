import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CodePeg from './CodePeg';
import KeyPeg from './KeyPeg';
import DecodeGrid from './DecodeGrid';
import '../index.css';

storiesOf('DecodeGrid', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const guesses = [Array(4).fill(CodePeg.defaultValue())];
    const keys = [Array(4).fill(KeyPeg.defaultValue())];
    return (<DecodeGrid remainingGuessCount={3} guesses={guesses} keys={keys}></DecodeGrid>);
  })
  .add('one guess', () => {
    const guesses = [[...CodePeg.colors().slice(0, 4).keys()]];
    const keys = [[0, 0, 1, 2]];
    return (<DecodeGrid remainingGuessCount={2} guesses={guesses} keys={keys}></DecodeGrid>);
  })
  .add('two guess', () => {
    const guesses = [[0, 1, 2, 3], [4, 5, 0, 1]];
    const keys = [[0, 0, 1, 2], [0, 1, 1, 2]];
    return (<DecodeGrid remainingGuessCount={1} guesses={guesses} keys={keys}></DecodeGrid>);
  });   
