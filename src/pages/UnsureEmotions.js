import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../Components/Button';
import BunnyBody from '../Components/BunnyBody';
import Bubble from '../Components/Bubble';
import { NavLink } from 'react-navi';
import EmotionDefinitions from '../constants/EmotionDefinitions';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 85%;
  height: 75vh;
`
const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
`
const BubblesContainer = styled.div`
  display: flex;
`
const StyledDefinition = styled.p`
  font-family: 'Poppins';
  font-size: 1.25rem;
  text-align: center;
`
const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`
const TransparentDiv = styled.div`
  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 1;
    background-color: white;
  }
`

class UnsureEmotions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      selected: false,
      selectedEmotion : ''
    }
  }

  handleClick(emotion, evt) {
    if (!this.state.selected) {
      this.setState({ selected: true, selectedEmotion: emotion });
    }
  }

  handleClose() {
    if (this.state.selected) {
      this.setState({ selected: false, selectedEmotion: '' });
    }
  }

  render() {
    const emotions = (this.props.emotions).toString().split("+");
    const emotion1 = emotions[0];
    const emotion2 = emotions[1];

    let emotionCategory1 = EmotionDefinitions[emotion1];
    let emotionCategory2 = EmotionDefinitions[emotion2];

    return (
      <StyledContainer>
        {this.state.selected &&
          <TransparentDiv/>
        }
        <StyledHeader>You might be feeling <strong>{emotion1}</strong> or <strong>{emotion2}</strong>.</StyledHeader>
        <StyledHeader>Select one that best describes how you feel.</StyledHeader>
        <BubblesContainer>
          <BubbleContainer>
            <Bubble
              selected= {this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion={emotion1}
              baseEmotion={emotion1}
              subEmotion={false}
              shown={true}
              definition={emotionCategory1[emotion1]}
            />
            <StyledDefinition>{emotionCategory1[emotion1]}</StyledDefinition>
          </BubbleContainer>
          <BubbleContainer>
            <Bubble
              selected={this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion={emotion2}
              baseEmotion={emotion2}
              subEmotion={false}
              shown={true}
              definition={emotionCategory2[emotion2]}
            />
            <StyledDefinition>{emotionCategory2[emotion2]}</StyledDefinition>
          </BubbleContainer>
        </BubblesContainer>
        <NavLink href={`/${this.state.selectedEmotion}/${this.state.selectedEmotion}/itsOkay`}>
          <Button text='Next' emotion={this.state.selectedEmotion} show={this.state.selected}/>
        </NavLink>
      </StyledContainer>
    );
  }
}

export default (UnsureEmotions);
