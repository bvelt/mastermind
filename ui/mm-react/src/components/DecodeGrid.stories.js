import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import CodePeg from './CodePeg';
import DecodeGrid from './DecodeGrid';
import '../index.css';

storiesOf('DecodeGrid', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const guesses = [Array(4).fill(CodePeg.defaultValue())];
    const answers = [[0, 0]];
    return (<DecodeGrid remainingGuessCount={3} guesses={guesses} answers={answers}></DecodeGrid>);
  })
  .add('one guess', () => {
    const guesses = [[...CodePeg.colors().slice(0, 4).keys()]];
    const answers = [[2, 1]];
    return (<DecodeGrid remainingGuessCount={2} guesses={guesses} answers={answers}></DecodeGrid>);
  })
  .add('two guess', () => {
    const guesses = [[0, 1, 2, 3], [4, 5, 0, 1]];
    const answers = [[2, 1], [1, 2]];
    return (<DecodeGrid remainingGuessCount={1} guesses={guesses} answers={answers}></DecodeGrid>);
  })
  .add('with solution', () => {
    const guesses = [[0, 1, 2, 3], [4, 5, 0, 1]];
    const answers = [[2, 1], [4, 0]];
    return (<DecodeGrid remainingGuessCount={1} guesses={guesses} answers={answers}></DecodeGrid>);
  });   
