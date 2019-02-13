import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'
import CloseIcon from './CloseIcon';

const StyledBubble = styled.div`
  background: ${props => props.color};
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  position: ${(props) => props.selected ? "absolute" : "relative"};
  width: ${(props) => props.selected ? "70vh" : "18.25rem"};
  height: ${(props) => props.selected ? "70vh" : "18.25rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  font-family: 'Poppins';
  z-index: ${(props) => props.selected ? "1" : "0"};
  margin: ${(props) => props.selected ? "0 auto" : "1rem"};
  left: 0;
  right: 0;
  top: ${(props) => props.selected ? "2rem" : "0"};
  cursor: pointer;
`
const StyledImg = styled.img`
  height: 50%;
  margin: 0 auto;
`
const StyledX = styled.div`
  display: ${(props) => props.selected ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  width: 3rem;
  height: 3rem;
  top: 3rem;
  right: 4rem;
`
const StyledText = styled.p`
  font-size: ${(props) => props.selected ? "2rem" : "1.375rem"};
  margin: 0.5rem 0 0 0;
`

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : this.props.selected === this.props.emotion,
    };
  }


  render() {
    const baseEmotion = this.props.baseEmotion;
    const emotion = this.props.emotion;
    const emotionString = (baseEmotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    return (
      <StyledBubble
        onClick={(evt) => {this.props.handleClick(emotion, evt)}}
        color={themeColor}
        selected={this.props.selected === emotion}>
        <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
        <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
        <StyledX
          onClick={() => {this.props.handleClose()}}
          selected={this.props.selected === emotion}
        >
          <CloseIcon/>
        </StyledX>
      </StyledBubble>
    );
  }

}

// Bubble.propTypes = {
//   emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
// }


export default withTheme(Bubble);
