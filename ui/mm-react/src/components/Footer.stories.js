import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';
import '../index.css';

storiesOf('Footer', module)
  .add(`default`, () => {
    return (<Footer></Footer>);
  });   
