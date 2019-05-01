import React from 'react';
import DecodeEditor from './DecodeEditor';
import Rules from '../components/Rules';
import './SinglePlayer.css';

class SinglePlayer extends React.Component {
  render() {
    return (
      <div className="singlePlayer clearfix">
        <div className="column sidebar">
          <Rules></Rules>
        </div>
        <div className="column main">
          <DecodeEditor></DecodeEditor>
        </div>
      </div>
    );
  }
}

export default SinglePlayer;