import React from "react";
import Video from "./components/Video";
import Videolist from "./components/VideoList";
import "./App.css";
import axios from "axios";
import Modal from './components/Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      activeVideo: {},
    };
    this.changeActive = this.changeActive.bind(this);
    this.loadVideos = this.loadVideos.bind(this);
  }
  changeActive(videoObj) {
    this.setState({ activeVideo: videoObj });
  }

  async loadVideos() {
    const videos = await axios.get("http://localhost:1327/api/v1/video");
    this.setState({ videos:videos.data})
  }
  componentDidMount() {
    //Play the firt video by default
    this.setState({
      activeVideo: this.state.videos[0],
    });
    //load videos from backend
    this.loadVideos();
  }
  render() {
    return (
      <div className="container">
        <div className="aside">
          <ul>
            {this.state.videos.map((video) => (
              <Videolist
                video={video}
                key={video.id}
                changeActive={this.changeActive}
              />
            ))}
          </ul>
        </div>
        <div className="video-container">
          <div className="video">
            <Video activeVideo={this.state.activeVideo} />
          </div>
          <Modal />
        </div>
      </div>
    );
  }
}

export default App;

