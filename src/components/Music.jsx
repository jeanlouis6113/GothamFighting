import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import "./Music.css"
const { PlayPause, MuteUnmute } = controls

class Music extends Component {
  render() {
    return (
      <Media >
        <div className="media">
          <div className="media-player ">
            <Player src="https://www.youtube.com/watch?v=W8RamqJ0BgI&t=3s" 
            /> 
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    )
  }
}
export default Music;