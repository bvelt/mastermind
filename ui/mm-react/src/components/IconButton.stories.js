import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import IconButton from './IconButton';
import '../index.css';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const icon = text('Icon', 'check');
    return (<IconButton icon={icon}></IconButton>);
  })
  .add('disabled', () => {
    const icon = text('Icon', 'check');
    return (<IconButton icon={icon} isDisabled={true} onClick={action('onClick')}></IconButton>);
  })
  .add('clickable', () => {
    const icon = text('Icon', 'check');
    return (<IconButton icon={icon} onClick={action('onClick')}></IconButton>);
  });   
