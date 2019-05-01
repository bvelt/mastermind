import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import DecodeEditor from './DecodeEditor';
import gameReducers from '../reducers/Reducers';
import * as actions from '../actions/ActionCreators';
import '../index.css';

const store = createStore(gameReducers);
store.dispatch(actions.newGame());

storiesOf('DecodeEditor', module)
  .addDecorator(withKnobs)
  .add(`with random code ${store.getState().code}`, () => {
    return (<Provider store={store}><DecodeEditor></DecodeEditor></Provider>);
  });
