import React, { Component } from "react";
import MeditationBubble from "../Components/MeditationBubble";

class Meditation extends Component {
  constructor(props) {
    super(props);
    this.handleAnimation = this.handleAnimation.bind(this);
    this.state = {
      animate: false
    };
  }

  componentDidMount() {
    this.animateBubble();
  }

  animateBubble() {
    this.setState({
      animate: !this.state.animate
    })
  }

  handleAnimation(evt) {
    this.animateBubble();
    console.log("done");
  }

  render() {
    return (
      <div>
        <MeditationBubble
          handleAnimation={this.handleAnimation}
          animate={this.state.animate}
        />
      </div>
    );
  }
}

export default(Meditation);
