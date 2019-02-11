import React, { Component } from "react";
import styled from 'styled-components'; import PropTypes from 'prop-types';
import angry from '../static/images/bunnies/angry/angry.png';
import joyful from '../static/images/bunnies/happy/happy.png';
import sad from '../static/images/bunnies/sad/sad.png';
import disgust from '../static/images/bunnies/disgust/disgust.png';
import afraid from '../static/images/bunnies/scared/scared.png';

const StyledBubble = styled.div`
  background: ${props => props.theme.brandPrimary};
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
  cursor: pointer;
`
const StyledBubbleAngry = styled(StyledBubble)`
  background: ${props => props.theme.angryPrimary};
`
const StyledBubbleJoyful = styled(StyledBubble)`
  background: ${props => props.theme.joyfulPrimary};
`
const StyledBubbleSad = styled(StyledBubble)`
  background: ${props => props.theme.sadPrimary};
`
const StyledBubbleDisgust = styled(StyledBubble)`
  background: ${props => props.theme.disgustPrimary};
`
const StyledBubbleAfraid = styled(StyledBubble)`
  background: ${props => props.theme.afraidPrimary};
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


  renderBubble() {
    const emotion = this.props.emotion;
    if (emotion === 'angry') {
      return (
        <StyledBubbleAngry
          onClick={(evt) => {this.props.handleClick(this.props.emotion, evt)}}
          selected={this.props.selected === this.props.emotion}>
          <StyledImg src={angry}/>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>

        </StyledBubbleAngry>
      );
    } else if (emotion === 'joyful') {
      return (
        <StyledBubbleJoyful
          onClick={() => {this.props.handleClick(this.props.emotion)}}
          selected={this.props.selected === this.props.emotion}>
          <StyledImg src={joyful}/>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>
        </StyledBubbleJoyful>);
    } else if (emotion === 'sad') {
      return (
        <StyledBubbleSad onClick={() => {this.props.handleClick(this.props.emotion)}}
          selected={this.props.selected === this.props.emotion}>
          <StyledImg src={sad}/>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>
        </StyledBubbleSad>);
    } else if (emotion === 'disgust') {
      return (
        <StyledBubbleDisgust onClick={() => {this.props.handleClick(this.props.emotion)}}
          selected={this.props.selected === this.props.emotion}>
          <StyledImg src={disgust}/>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>
        </StyledBubbleDisgust>);
    } else if (emotion === 'afraid') {
      return (
        <StyledBubbleAfraid onClick={() => {this.props.handleClick(this.props.emotion)}}
          selected={this.props.selected === this.props.emotion}>
          <StyledImg src={afraid}/>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>
        </StyledBubbleAfraid>);
    } else {
      return (
        <StyledBubble onClick={() => {this.props.handleClick(this.props.emotion)}}
          selected={this.props.selected === this.props.emotion}>
          <p>{this.props.emotion}</p>
          <StyledX onClick={() => {this.props.handleClose()}}
            selected={this.props.selected === this.props.emotion}>
            X
          </StyledX>
        </StyledBubble>);
    }
  }

  render() {
    return (
      <div>
        { this.renderBubble() }
      </div>
    )
  }
}

Bubble.propTypes = {
  emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
}


export default Bubble;
