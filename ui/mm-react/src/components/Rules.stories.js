import React from 'react';
import { storiesOf } from '@storybook/react';
import Rules from './Rules';
import '../index.css';

storiesOf('Rules', module)
  .add('default', () => (
    <Rules></Rules>
  ));   
