import React, { Component } from 'react';
import { Media, Player } from 'react-media-player';
import "./Video.css";

class Video extends Component {

  render() {
    return (
      <div >

        <div className="masquer">
          <Media>
            <div className="media">
              <div className="media-player ">
                <Player src="https://www.youtube.com/watch?v=W8RamqJ0BgI&t=3s"
                />
              </div>
              <div className="media-controls">
              </div>
            </div>
          </Media>
        </div>

      </div>
    )
  }
}
export default Video;