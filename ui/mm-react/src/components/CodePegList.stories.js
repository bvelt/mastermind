import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import CodePeg from './CodePeg';
import CodePegList from './CodePegList';
import '../index.css';

storiesOf('CodePegList', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (<CodePegList></CodePegList>);
  })
  .add('empty items', () => {
    return (<CodePegList values={Array(4).fill(CodePeg.EMPTY_VALUE)}></CodePegList>);
  })
  .add('selectable items', () => {
    return (<CodePegList isSelectable={true} onSelect={action('onSelect')}></CodePegList>);
  });   
