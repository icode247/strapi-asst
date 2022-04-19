import React from "react";

class Video extends React.Component {
  render() {
    return (
      <>
        <video
          controls
          width="600"
          src={this.props.activeVideo?.videoUrl}
        ></video>
        <h4>{this.props.activeVideo?.name}</h4>
        <p>{this.props.activeVideo?.description}</p>
      </>
    );
  }
}

export default Video;
