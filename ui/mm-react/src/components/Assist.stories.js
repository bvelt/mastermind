import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import Assist from './Assist';
import '../index.css';

storiesOf('Assist', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (<Assist></Assist>);
  });   