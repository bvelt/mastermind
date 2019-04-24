import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyPeg from './KeyPeg';
import '../index.css';

storiesOf('KeyPeg', module)
  .add('match position', () => (
    <KeyPeg value={KeyPeg.MATCH_TYPE.indexOf('position')}></KeyPeg>
  ))
  .add('match color', () => (
    <KeyPeg value={KeyPeg.MATCH_TYPE.indexOf('color')}></KeyPeg>
  ))
  .add('no match', () => (
    <KeyPeg></KeyPeg>
  ));   
