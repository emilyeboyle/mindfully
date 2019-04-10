import React from "react";
import styled from 'styled-components';
import GameBubble from '../Components/GameBubble.js';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
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
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.state = {
      bubbleNumbers : 20,
      currentBubbleNumber: 20,
      showModal: true
    };
  }

  modalClose() {
    this.setState({showModal: false});
  }

  modalOpen() {
    this.setState({showModal: true});
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
        <div>
          <BubblesContainer>
            {this.createBubbles()}
          </BubblesContainer>
          <Modal
            open={this.state.showModal}
            handleClose={this.modalClose}
            text="Have some fun popping bubbles! The activity will end when all the bubbles have been popped."
          />
        </div>
      );
    }
  }
}

export default(BubblePop);
