import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Header from './Header';
import '../index.css';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add(`default`, () => {
    return (<Header></Header>);
  });   
