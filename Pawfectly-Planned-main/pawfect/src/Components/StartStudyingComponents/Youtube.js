import React from "react";
import YouTube from "react-youtube";

class MovieClip extends React.Component {
  render() {
    const options = {
      width: '200px', 
      height: '200px',
      playerVars: {
        autoplay: 1,
        controls: 1
      }
    };

    return (
      <YouTube
        videoId="jfKfPfyJRdk"
        options={options}
        onReady={this._onReady}
        id="video"
        style={{ width: "100%", height: "100%" }} // Ensure video fills its container
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MovieClip;
