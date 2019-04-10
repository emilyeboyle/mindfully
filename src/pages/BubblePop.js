import React from "react";
import styled from 'styled-components';
import GameBubble from '../Components/GameBubble.js';
import Button from '../Components/Button';
import { NavLink } from 'react-navi';

const BubblesContainer = styled.div`
`
const BubbleOverlay = styled.div`
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 20rem auto;
  text-align: center;
`

class BubblePop extends React.Component {
  constructor() {
    super();
    this.updateBubbleNumber = this.updateBubbleNumber.bind(this);
    this.state = {
      bubbleNumbers : 20,
      currentBubbleNumber: 20
    };
  }

  updateBubbleNumber() {
    this.setState({currentBubbleNumber : this.state.currentBubbleNumber - 1});
  }

  createBubbles() {
    let bubbles = [];
    for (let i = 0; i < this.state.bubbleNumbers; i++) {
      let translateX = (Math.random()*50) - 25 + 'px';
      let translateY = (Math.random()*50) - 25 + 'px';
      bubbles.push(<GameBubble key={i} moveX={translateX} moveY={translateY} updateBubbleNumber={this.updateBubbleNumber}/>);
    }
    return bubbles;
  }

  render() {
    if (this.state.currentBubbleNumber === 0) {
      return(
        <BubbleOverlay>
          <StyledH2> You've popped all the bubbles! </StyledH2>
          <NavLink href={`/thankYou`}>
            <Button text='Finish' emotion="brand" show={true}/>
          </NavLink>
        </BubbleOverlay>
      );
    } else {
      return(
        <BubblesContainer>
          {this.createBubbles()}
        </BubblesContainer>
      );
    }
  }
}

export default(BubblePop);
