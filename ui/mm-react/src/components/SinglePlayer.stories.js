import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SinglePlayer from './SinglePlayer';
import CodeMaker from '../game/CodeMaker';
import '../index.css';

const codeMaker = new CodeMaker();
const code = codeMaker.createRandomly();

storiesOf('SinglePlayer', module)
  .addDecorator(withKnobs)
  .add(`with random ${code}`, () => {
    return (<SinglePlayer code={code}></SinglePlayer>);
  });   
