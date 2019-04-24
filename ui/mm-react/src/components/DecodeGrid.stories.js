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
    const codeValues = Array(4).fill(CodePeg.defaultValue());
    const keyValues = Array(4).fill(KeyPeg.defaultValue());
    return (<DecodeGrid codeValues={codeValues} keyValues={keyValues}></DecodeGrid>);
  })
  .add('one guess', () => {
    const codeValues = [...CodePeg.colors().slice(0, 4).keys()];
    const keyValues = [0, 0, 1, 2];
    return (<DecodeGrid codeValues={codeValues} keyValues={keyValues}></DecodeGrid>);
  })
  .add('two guess', () => {
    const codeValues = [0, 1, 2, 3, 4, 5, 0, 1];
    const keyValues = [0, 0, 1, 2, 0, 1, 1, 2];
    return (<DecodeGrid codeValues={codeValues} keyValues={keyValues}></DecodeGrid>);
  });   
