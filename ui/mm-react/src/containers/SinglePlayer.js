import React from 'react';
import DecodeEditor from './DecodeEditor';
import Rules from '../components/Rules';
import './SinglePlayer.css';

class SinglePlayer extends React.Component {
  render() {
    return (
      <div>
        <Rules></Rules>
        <div className="content">
          <DecodeEditor></DecodeEditor>
        </div>
      </div>
    );
  }
}

export default SinglePlayer;