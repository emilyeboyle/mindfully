import React, { Component } from "react";
import MeditationBubble from "../Components/MeditationBubble";
import Modal from '../Components/Modal';
import Audiofile from '../static/audio/Breathe.mp3';

class Meditation extends Component {
  constructor(props) {
    super(props);
    this.handleAnimation = this.handleAnimation.bind(this);
    this.state = {
      animate: false,
      showModal : true,
      modalText : "Spend the next few minutes focusing on your breathing.",
    };
    this.audio = new Audio(Audiofile);
    this.modalClose = this.modalClose.bind(this);
  }

  componentWillUnmount() {
    this.audio.stop();
  }

  modalClose() {
    this.setState({showModal: false});
    this.animateBubble();
    this.audio.play();
  }

  animateBubble() {
    this.setState({
      animate: !this.state.animate
    }, () => {
    })
  }

  handleAnimation(evt) {
    this.animateBubble();
    window.location.assign("/thankYou");
  }

  render() {
    return (
      <div>
          <Modal
            open={this.state.showModal}
            handleClose={this.modalClose}
            text={this.state.modalText}
          />
        <MeditationBubble
          handleAnimation={this.handleAnimation}
          animate={this.state.animate}
        />
      </div>
    );
  }
}

export default(Meditation);
