import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyPegGrid from './KeyPegGrid';
import '../index.css';

storiesOf('KeyPegGrid', module)
  .add('default', () => (
    <KeyPegGrid></KeyPegGrid>
  ))
  .add('with answer [2, 1]', () => (
    <KeyPegGrid answer={[2, 1]}></KeyPegGrid>
  ));   
