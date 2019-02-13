import React, { Component } from 'react';
import { NavLink } from 'react-navi';
import Bubble from '../Components/Bubble';
import Button from '../Components/Button'; import EmotionSlider from '../Components/EmotionSlider';
import styled from 'styled-components';
import EmotionsList from '../constants/EmotionsList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const BubbleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 0.25rem 0 0 1rem;;
`
const StyledH2Light = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 300;

  .base-emotion {
    //need to make this change color based on emotion
    font-weight: 400;
  }
`
const TransparentDiv = styled.div`
  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 1;
    background-color: white;
  }
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
        <Container>
          {this.state.selected &&
              <TransparentDiv/>
          }
          <StyledH2Light>So you are feeling <span className="base-emotion">{baseEmotion}</span>.</StyledH2Light>
          <StyledH2>How {baseEmotion} are you?</StyledH2>
          <SliderContainer>
            <EmotionSlider emotion={this.state.baseEmotion} value={this.handleValue}></EmotionSlider>
          </SliderContainer>
          <BubbleContainer>
            {emotionList.map((emotion, i) => {
              let emo = emotion["emotion"];
              return(<Bubble
                key={i}
                selected= {this.state.selectedEmotion}
                handleClose={this.handleClose}
                handleClick={this.handleClick}
                emotion={emo}
                baseEmotion={this.state.baseEmotion}
                subEmotion={true}>
              </Bubble>)
            })}
          </BubbleContainer>
        </Container>
        <nav><NavLink href={`/${this.state.baseEmotion}/${this.state.selectedEmotion}/itsOkay`}>
            <Button show={this.state.selected} emotion={this.state.baseEmotion} text='Continue'></Button>
        </NavLink></nav>
      </div>
    )
  }
}
export default (SubEmotion);
