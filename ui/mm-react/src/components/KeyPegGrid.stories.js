import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyPegGrid from './KeyPegGrid';
import '../index.css';

storiesOf('KeyPegGrid', module)
  .add('default', () => (
    <KeyPegGrid></KeyPegGrid>
  ))
  .add('with values [0, 0, 1, 2]', () => (
    <KeyPegGrid values={[0, 0, 1, 2]}></KeyPegGrid>
  ));   
