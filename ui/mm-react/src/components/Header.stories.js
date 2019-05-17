import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';
import '../index.css';

storiesOf('Header', module)
  .add(`default`, () => {
    return (<Header></Header>);
  });   
