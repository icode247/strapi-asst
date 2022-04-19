import React from "react";

class Videolist extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.changeActive(this.props.video)}>
        {this.props.video.name}
      </li>
    );
  }
}

export default Videolist;
