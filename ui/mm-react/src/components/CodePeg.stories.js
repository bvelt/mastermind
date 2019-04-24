import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import CodePeg from './CodePeg';
import '../index.css';

const options = {
  range: true,
  min: 0,
  max: CodePeg.COLORS.length - 1,
  step: 1,
};

storiesOf('CodePeg', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (<CodePeg></CodePeg>);
  })
  .add('non clickable', () => {
    const value = number('Value', 0, options);
    return (<CodePeg value={value} isClickable={false} onClick={action('onClick')}></CodePeg>);
  })
  .add('clickable', () => {
    const value = number('Value', 0, options);
    return (<CodePeg value={value} isClickable={true} onClick={action('onClick')}></CodePeg>);
  });   
