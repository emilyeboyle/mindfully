import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import angry from '../static/images/bunnies/angry/angry.png';
import joyful from '../static/images/bunnies/happy/happy.png';
import sad from '../static/images/bunnies/sad/sad.png';
import disgust from '../static/images/bunnies/disgust/disgust.png';
import afraid from '../static/images/bunnies/scared/scared.png';

const StyledBubble = styled.div`
  background: ${props => props.theme.brandPrimary};
  border-radius: 121% 128% 125% 124%/125% 120% 127% 125%;
  position: ${(props) => props.selected ? "absolute" : "relative"};
  transition: 0.2s opacity ease-in-out, 0.2s display ease-in-out .2s;
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
const StyledLink = styled.a`
  color: black;
  background-color: ${props => props.theme.brandPrimary};
  border-radius: 38.5px;
  padding: 14px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
  font-size: 20px;
  width: 130px;
  //28px of padding left and right

`
const StyledImg = styled.img`
  height: 50%;
  margin: 0 auto;
`

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : false,
    };
    this.resize = this.resize.bind(this);
  }

  resize() {
    const isSelected = !this.state.selected;
    this.setState({
      selected : isSelected
    })
  }

  //conditional rendering based on prop
  render() {
    const emotion = this.props.emotion;
    if (emotion === 'angry') {
      return (<StyledBubbleAngry onClick={this.resize} selected={this.state.selected}><StyledImg src={angry}/><p>{this.props.emotion}</p><StyledLink>Continue</StyledLink></StyledBubbleAngry>);
    } else if (emotion === 'joyful') {
      return (<StyledBubbleJoyful onClick={this.resize} selected={this.state.selected}><StyledImg src={joyful}/><p>{this.props.emotion}</p></StyledBubbleJoyful>);
    } else if (emotion === 'sad') {
      return (<StyledBubbleSad onClick={this.resize} selected={this.state.selected}><StyledImg src={sad}/><p>{this.props.emotion}</p></StyledBubbleSad>);
    } else if (emotion === 'disgust') {
      return (<StyledBubbleDisgust onClick={this.resize} selected={this.state.selected}><StyledImg src={disgust}/><p>{this.props.emotion}</p></StyledBubbleDisgust>);
    } else if (emotion === 'afraid') {
      return (<StyledBubbleAfraid onClick={this.resize} selected={this.state.selected}><StyledImg src={afraid}/><p>{this.props.emotion}</p></StyledBubbleAfraid>);
    } else {
      return (<StyledBubble onClick={this.resize} selected={this.state.selected}><p>{this.props.emotion}</p></StyledBubble>);
    }
  }
}

Bubble.propTypes = {
  emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
}


export default Bubble;
