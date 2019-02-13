import React, { Component } from 'react';
import { NavLink } from 'react-navi'
import Bubble from '../Components/Bubble';
import Button from '../Components/Button';
import styled from 'styled-components';

const BubbleContainer = styled.div`
  text-align: center;
  overflow: auto;
`
class Emotion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selected : false,
      selectedEmotion : '',
      message : '',
    };
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
    return (
      <div>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="joyful"
            baseEmotion="joyful">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="angry"
            baseEmotion="angry">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="sad"
            baseEmotion="sad">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="afraid"
            baseEmotion="afraid">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="disgust"
            baseEmotion="disgust">
          </Bubble>
        </BubbleContainer>
        <div>{this.props.selectedEmotion}</div>
        <nav><NavLink href={`/${this.state.selectedEmotion}`}>
        <Button show={this.state.selected} emotion={this.state.selectedEmotion} text='Continue'></Button>
        </NavLink></nav>
      </div>
    )
  }
}
export default (Emotion);
