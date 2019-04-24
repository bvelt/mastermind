import React from 'react';
import Header from './components/Header';
import SinglePlayer from './components/SinglePlayer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SinglePlayer maximumGuessCount={10}></SinglePlayer>
      </div>
    );
  }
}

export default App;
