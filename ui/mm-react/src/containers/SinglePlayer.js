import React from 'react';
import DecodeEditor from './DecodeEditor';
import Rules from '../components/Rules';
import './SinglePlayer.css';

class SinglePlayer extends React.Component {
  render() {
    return (
      <div className="container">
        <Rules></Rules>
        <DecodeEditor></DecodeEditor>
      </div>
    );
  }
}

export default SinglePlayer;