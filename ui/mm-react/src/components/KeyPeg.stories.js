import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyPeg from './KeyPeg';
import '../index.css';

storiesOf('KeyPeg', module)
  .add('match position', () => (
    <KeyPeg value={KeyPeg.KEY_NAMES.indexOf('position')}></KeyPeg>
  ))
  .add('match color', () => (
    <KeyPeg value={KeyPeg.KEY_NAMES.indexOf('color')}></KeyPeg>
  ))
  .add('no match', () => (
    <KeyPeg></KeyPeg>
  ));   
