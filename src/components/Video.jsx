import React, { Component } from 'react';
import { Media, Player } from 'react-media-player';
import "./Video.css";

class Video extends Component {
  render() {
    return (
      <Media >
        <div className="media">
          <div className="media-player ">
            <Player src="https://www.youtube.com/watch?v=W8RamqJ0BgI&t=3s" 
            /> 
          </div>
          <div className="media-controls">
          </div>
        </div>
      </Media>
    )
  }
}
export default Video;