import React from "react";
import axios from "axios";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      name: "",
      coverUrl: "",
      videoUrl: "",
      description: "",
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:1327/api/v1/video", {
      name: this.state.name,
      coverUrl: this.state.coverUrl,
      videoUrl: this.state.videoUrl,
      description: this.state.description,
    });
    e.target.reset();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <span className="open" onClick={this.handleOpenModal}>
          +
        </span>
        <div
          className="Modal"
          style={{ display: this.state.showModal ? "block" : "none" }}
        >
          <span className="close" onClick={this.handleCloseModal}>
            X
          </span>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Video name"
                name="name"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                placeholder="Video Cover URL"
                name="coverUrl"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                placeholder="Video URL"
                name="videoUrl"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                placeholder="description"
                name="description"
                onChange={this.handleChange}
              ></input>
              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
