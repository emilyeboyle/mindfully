import React, { Component } from "react";
import styled from 'styled-components'; // import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'
import CloseIcon from './CloseIcon';
import { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);

const fadeAnimation = keyframes`${bounceIn}`;


const bubbleup = (animValue1, animValue2) => keyframes`
   0% {
       transform: translate(0px, 0px);
       animation-timing-function:ease-in-out
   }

   50% {
       transform: translate(${animValue1}, ${animValue2});
       animation-timing-function:ease-in-out
   }
   100% {
       transform: translate(0px, 0px);
       animation-timing-function:ease-in-out
   }
`

const StyledBubble = styled.div`
  background: ${props => props.color};
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  color: ${(props) => props.whiteText ? "white" : "black"};
  position: ${(props) => props.selected ? "absolute" : "relative"};
  width: ${(props) => props.selected ? "70vh" : "16.25rem"};
  height: ${(props) => props.selected ? "70vh" : "16.25rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: 'Poppins';
  z-index: ${(props) => props.selected ? "100" : "0"};
  margin: ${(props) => props.selected ? "0 auto" : ".5rem"};
  left: 0;
  right: 0;
  top: ${(props) => props.selected ? "2rem" : "0"};
  cursor: pointer;
  opacity: ${(props) => props.shown ? ".3" : "1"};
  pointer-events: ${(props) => props.shown ? "none" : "auto"};
  box-shadow: inset 10000px 2px 5px rgba(255, 255, 255,${props => props.value});
  transition: opacity .3s ease-in;
  transition: .3s ease-in-out;
  animation: ${props => props.selected ? "none" : bubbleup(props.animValue1, props.animValue2)} 12s linear infinite alternate;
`
const JoyfulBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '75px'};
  top: ${(props) => props.selected ? "2rem" : "100px"};
  `
const AngryBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '375px'};
  top: ${(props) => props.selected ? "2rem" : "120px"};
  `
const SadBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '675px'};
  top: ${(props) => props.selected ? "2rem" : "100px"};
  `
const AfraidBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '100px'};
  top: ${(props) => props.selected ? "2rem" : "380px"};
  `
const DisgustedBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '375px'};
  top: ${(props) => props.selected ? "2rem" : "400px"};
  `
const UnsureBubble = styled(StyledBubble)`
  position: absolute;
  left: ${(props) => props.selected ? '0px' : '650px'};
  top: ${(props) => props.selected ? "2rem" : "380px"};
  `
const StyledBubbleSmall = styled(StyledBubble)`
  width: ${(props) => props.selected ? "70vh" : "12rem"};
  height: ${(props) => props.selected ? "70vh" : "12rem"};
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
  top: 15%;
  left: 85%;
`
const StyledText = styled.p`
  font-size: ${(props) => props.selected ? "2rem" : "1.375rem"};
  margin: 0.5rem 0 0 0;
`
const StyledTextSmall = styled(StyledText)`
  font-size: ${(props) => props.selected ? "2rem" : "1rem"};
`
const StyledDefinition = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: none;
  margin: 0.5rem 6rem;
  text-align: center;
  line-height: 2rem;
  display: ${(props) => props.selected ? "block" : "none"};
`

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : this.props.selected === this.props.emotion,
    animValue1 : Math.floor(-8 + Math.random() * (8+8)) + 'px',
    animValue2 : Math.floor(-8 + Math.random() * (8+8)) + 'px'
    };
  }


  render() {
    const baseEmotion = this.props.baseEmotion;
    const emotion = this.props.emotion;
    const definition = this.props.definition;
    const emotionString = (baseEmotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = (baseEmotion === "unsure" ? theme["brandPrimary"] : theme[emotionString]);
    const shown = !this.props.shown;
    let maxVal = .5- (this.props.maxVal*.005);
    if (this.props.shown) {
      maxVal = .5- (this.props.value * .005);
    } else {
      maxVal =  .5- (this.props.maxVal*.005);
    }
    const colors = ['afraidPrimary', 'sadPrimary', 'angryPrimary']
    let whiteText = colors.indexOf(emotionString) > -1;
    let smallBubble = this.props.smallBubble;
    let bubble;
    if (smallBubble) {
      bubble=
        <StyledBubbleSmall
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}>
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledTextSmall selected={this.props.selected === emotion}>{emotion}</StyledTextSmall>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </StyledBubbleSmall>
    } else {
      if (emotion === 'joyful') {
      bubble=
      <JoyfulBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </JoyfulBubble>
      } else if (emotion === 'angry') {
      bubble=
        <AngryBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </AngryBubble>
      } else if (emotion === 'sad') {
      bubble=
        <SadBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </SadBubble>
      } else if (emotion === 'afraid') {
      bubble=
        <AfraidBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </AfraidBubble>
      } else if (emotion === 'disgusted') {
      bubble=
        <DisgustedBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </DisgustedBubble>
      } else if (emotion === 'unsure') {
      bubble=
        <UnsureBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </UnsureBubble>
      } else {
      bubble=
        <StyledBubble
          onClick={(evt) => {this.props.handleClick(emotion, evt)}}
          color={themeColor}
          whiteText = {whiteText}
          shown={shown}
          value={maxVal}
          animValue1={this.state.animValue1}
          animValue2={this.state.animValue2}
          selected={this.props.selected === emotion}
        >
          <StyledImg src={require(`../static/images/bunnies/${baseEmotion}/${emotion}.png`)}/>
          <StyledText selected={this.props.selected === emotion}>{emotion}</StyledText>
          <StyledDefinition selected={this.props.selected === emotion}>{definition}</StyledDefinition>
          <StyledX
            onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === emotion}
          >
            <CloseIcon/>
          </StyledX>
        </StyledBubble>
      }
    }
    return (bubble);
  }

}


Bubble.defaultProps = {
  value: 100,
  smallBubble: false
}

export default withTheme(Bubble);
