import React, { Component } from "react";
import styled from 'styled-components';
//import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'

const StyledBubble = styled.div` background: ${props => props.color};
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  position: ${(props) => props.selected ? "absolute" : "relative"};
  width: ${(props) => props.selected ? "70vh" : "300px"};
  height: ${(props) => props.selected ? "70vh" : "300px"};
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  font-family: 'Poppins';
  z-index: ${(props) => props.selected ? "1" : "0"};
  margin: ${(props) => props.selected ? "0 auto" : "0"};
  left: 0;
  right: 0;
  top: ${(props) => props.selected ? "100px" : "0"};
  cursor: pointer;
  opacity: ${(props) => props.shown ? ".3" : "1"};
  pointer-events: ${(props) => props.shown ? "none" : "auto"};
`
const StyledImg = styled.img`
  height: 50%;
  margin: 0 auto;
`
const StyledX = styled.div`
  display: ${(props) => props.selected ? "block" : "none"};
  position: absolute;
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  background: white;
  width: 50px;
  height: 50px;
  top: 50px;
  right: 100px;
  font-size: 30px;
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
    const shown = !this.props.shown;
    return (
      <StyledBubble
        onClick={(evt) => {this.props.handleClick(emotion, evt)}}
        color={themeColor}
        shown={shown}
        selected={this.props.selected === emotion}>
        <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
        <p>{emotion}</p>
        <StyledX onClick={() => {this.props.handleClose()}}
          selected={this.props.selected === emotion}>
          X
        </StyledX>

      </StyledBubble>
    );
  }

}

//Bubble.propTypes = {
  //emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
//}


export default withTheme(Bubble);
