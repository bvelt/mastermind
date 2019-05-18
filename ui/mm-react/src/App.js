import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './components/Header';
import Footer from './components/Footer';
import SinglePlayer from './containers/SinglePlayer';
import gameReducers from './reducers/Reducers';
import * as actions from './actions/ActionCreators';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(gameReducers);
  }
  componentDidMount() {
    this.store.dispatch(actions.newGame());
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <Header></Header>
          <SinglePlayer></SinglePlayer>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
