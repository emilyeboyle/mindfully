import React from "react";
import styled from 'styled-components';
import GameBubble from '../Components/GameBubble.js';

const BubblesContainer = styled.div`
`


class BubblePop extends React.Component {
  constructor() {
    super();
    this.state = {
      bubbleNumbers : 20
    };
  }

  createBubbles() {
    let bubbles = [];
    for (let i = 0; i < this.state.bubbleNumbers; i++) {
      bubbles.push(<GameBubble key={i} />);
    }
    return bubbles;
  }

  render() {
    return(
      <BubblesContainer>
        {this.createBubbles()}
      </BubblesContainer>
    );
  }
}

export default(BubblePop);
