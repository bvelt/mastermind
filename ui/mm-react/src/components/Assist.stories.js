import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import Assist from './Assist';
import '../index.css';
import GameCombinatorics from '../game/GameCombinatorics';

const combinatorics = new GameCombinatorics();

storiesOf('Assist', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (<Assist possibleCodes={combinatorics.generatePermutations()} onToggle={opened => action('onToggle')(opened)}></Assist>);
  })
  .add('opened', () => {
    return (<Assist possibleCodes={combinatorics.generatePermutations()} opened={true} onToggle={opened => action('onToggle')(opened)}></Assist>);
  });   