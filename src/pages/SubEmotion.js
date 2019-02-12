import React, { Component } from 'react';
import { NavLink } from 'react-navi';
import Bubble from '../Components/Bubble';
import Button from '../Components/Button';
import EmotionSlider from '../Components/EmotionSlider';
import styled from 'styled-components';

const BubbleContainer = styled.div`
  text-align: center;
  overflow: auto;
`
const SliderContainer = styled.div`
  margin: 50px 0;
`
class SubEmotion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleValue = this.handleValue.bind(this);
    //console.log(navigation);
    this.state = {
      baseEmotion: 'angry',
      selected : false,
      selectedEmotion : '',
      message : '',
      level: '3',
      value: ''
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

  handleValue(val) {
    console.log(val);
    this.setState({ value: val });
  }

  render() {
    return (
      <div>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <SliderContainer>
          <EmotionSlider emotion={this.state.baseEmotion} value={this.handleValue}></EmotionSlider>
        </SliderContainer>
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
        <nav><NavLink href={`/${this.state.selectedEmotion}/itsOkay`}>
        <Button show={this.state.selected} emotion={this.state.selectedEmotion} text='Continue'></Button>
        </NavLink></nav>
      </div>
    )
  }
}
export default (SubEmotion);
