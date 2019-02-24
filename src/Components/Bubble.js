import React, { Component } from "react";
import styled from 'styled-components'; // import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'
import CloseIcon from './CloseIcon';
import { keyframes } from 'styled-components';
import { bounceIn, fadeIn } from 'react-animations';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);

const fadeAnimation = keyframes`${bounceIn}`;

const StyledBubble = styled.div`
  background: ${props => props.color};
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  color: ${(props) => props.whiteText ? "white" : "black"};
  position: ${(props) => props.selected ? "absolute" : "relative"};
  width: ${(props) => props.selected ? "70vh" : "18.25rem"};
  height: ${(props) => props.selected ? "70vh" : "18.25rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: 'Poppins';
  z-index: ${(props) => props.selected ? "100" : "0"};
  margin: ${(props) => props.selected ? "0 auto" : "1rem"};
  left: 0;
  right: 0;
  top: ${(props) => props.selected ? "2rem" : "0"};
  cursor: pointer;
  opacity: ${(props) => props.shown ? ".3" : "1"};
  pointer-events: ${(props) => props.shown ? "none" : "auto"};
  box-shadow: inset 10000px 2px 5px rgba(255, 255, 255,${props => props.value});
  transition: opacity .3s ease-in;
  animation: .5s ${fadeAnimation};
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

function randomIntFromInterval(min,max) // min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : this.props.selected === this.props.emotion
    };
    //this.animation = [
      //{ x: randomIntFromInterval(-20, 20), y: randomIntFromInterval(-20, 20), duration: randomIntFromInterval(4000, 5000), paused:this.state.selected }
    //];
  }


  render() {


    const baseEmotion = this.props.baseEmotion;
    const emotion = this.props.emotion;
    const emotionString = (baseEmotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    const shown = !this.props.shown;
    let maxVal = .5- (this.props.maxVal*.005);
    if (this.props.shown) {
      maxVal = .5- (this.props.value * .005);
    } else {
      maxVal =  .5- (this.props.maxVal*.005);
    }
    const colors = ['afraidPrimary', 'sadPrimary', 'angryPrimary']
    let whiteText = colors.indexOf(emotionString) > -1;
    return (
      //<TweenOne
        //animation= {this.animation}
        //yoyo={true}
        //paused={this.state.paused}
        //repeat={-1}>
        <StyledBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
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
      //</TweenOne>
    );
  }

}

// Bubble.propTypes = {
//   emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
// }

Bubble.defaultProps = {
  value: 100
}

export default withTheme(Bubble);
