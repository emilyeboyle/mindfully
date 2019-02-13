import React, { Component } from 'react';
import { NavLink } from 'react-navi';
import Bubble from '../Components/Bubble';
import Button from '../Components/Button'; import EmotionSlider from '../Components/EmotionSlider';
import styled from 'styled-components';
import EmotionsList from '../constants/EmotionsList';
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
    this.createEmotionList = this.createEmotionList.bind(this);
    //console.log(navigation);
    this.state = {
      baseEmotion: 'afraid',
      selected : false,
      selectedEmotion : '',
      message : '',
      level: 'level2',
      value: ''
    };
  }

  createEmotionList() {
    const level = this.state.level;
    const baseEmotion = this.state.baseEmotion;
    let emotionLevel = EmotionsList[level];
    let emotionList = emotionLevel[baseEmotion];
    console.log(emotionList);
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
    const level = this.state.level;
    const baseEmotion = this.state.baseEmotion;
    let emotionLevel = EmotionsList[level];
    let emotionList = emotionLevel[baseEmotion];
    return (
      <div>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <SliderContainer>
            <EmotionSlider emotion={this.state.baseEmotion} value={this.handleValue}></EmotionSlider>
          </SliderContainer>
          {emotionList.map((emotion, i) => {
            let emo = emotion["emotion"];
            return(<Bubble
              key={i}
              selected= {this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion={emo}
              baseEmotion={this.state.baseEmotion}>
            </Bubble>)
          })}
        </BubbleContainer>
        <nav><NavLink href={`/${this.state.baseEmotion}/${this.state.selectedEmotion}/itsOkay`}>
            <Button show={this.state.selected} emotion={this.state.baseEmotion} text='Continue'></Button>
        </NavLink></nav>
      </div>
    )
  }
}
export default (SubEmotion);
