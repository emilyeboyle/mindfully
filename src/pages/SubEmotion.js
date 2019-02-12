import React, { Component } from 'react';
//import { NavLink } from 'react-navi'
import Bubble from '../Components/Bubble';
import Button from '../Components/Button';
import styled from 'styled-components';

const BubbleContainer = styled.div`
  text-align: center;
  overflow: auto;
`
class SubEmotion extends Component {
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
    console.log('close');
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
            emotion="joyful">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="angry">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="sad">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="afraid">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="disgust">
          </Bubble>
        </BubbleContainer>
        <Button show={this.state.selected} emotion={this.state.selectedEmotion} text='Continue'></Button>
      </div>
    )
  }
}
export default (SubEmotion);
