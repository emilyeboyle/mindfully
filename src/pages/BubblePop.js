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
      let translateX = (Math.random()*50) - 25 + 'px';
      let translateY = (Math.random()*50) - 25 + 'px';
      bubbles.push(<GameBubble key={i} moveX={translateX} moveY={translateY}/>);
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
