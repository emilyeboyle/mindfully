import React from "react";
import styled from 'styled-components';
import GameBubble from '../Components/GameBubble.js';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import { NavLink } from 'react-navi';
import ReactTimeout from 'react-timeout';

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
    this.warning = this.warning.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      bubbleNumbers : 20,
      currentBubbleNumber: 20,
      showModal: true,
      modalText: "intro"
    };
  }

  modalClose() {
    this.setState({showModal: false});
    if (this.state.modalText === "intro") {
      this.setWarnTimeout();
    } else if (this.state.modalText === "warn") {
      this.setRedirectTimeout();
    }
  }

  setWarnTimeout() {
    const warningTime = (1000 * 60 * 2);
    this.warnTimeout = this.props.setTimeout(this.warning, warningTime);
  };

  setRedirectTimeout() {
    const redirectTime = (1000 * 60);
    this.redirectTimeout = this.props.setTimeout(this.redirect, redirectTime);
  }

  warning() {
    this.setState({
      modalText: "warn",
      showModal: true
    });
  }

  redirect() {
    window.location.assign("/thankYou");
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
    let modalText;
    if (this.state.modalText === "intro") {
      modalText = "Have some fun popping bubbles! The activity will time out after 3 minutes."
    } else if (this.state.modalText === "warn") {
      modalText = "You have one minute remaining."
    }
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
            text={modalText}
          />
        </div>
      );
    }
  }
}

export default ReactTimeout(BubblePop);
