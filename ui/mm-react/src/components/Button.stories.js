import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import Button from './Button';
import '../index.css';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = text('Label', 'My Action');
    return (<Button label={label}></Button>);
  })
  .add('disabled', () => {
    const label = text('Label', 'My Action');
    return (<Button label={label} isDisabled={true} onClick={action('onClick')}></Button>);
  })
  .add('clickable', () => {
    const label = text('Label', 'My Action');
    return (<Button label={label} onClick={action('onClick')}></Button>);
  });   
