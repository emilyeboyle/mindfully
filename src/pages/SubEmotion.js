import React, { Component } from 'react';
import { NavLink } from 'react-navi';
import Bubble from '../Components/Bubble';
import Button from '../Components/Button'; import BackButton from '../Components/BackButton';
import EmotionSlider from '../Components/EmotionSlider';
import PageContainer from '../Components/PageContainer';
import styled from 'styled-components';
import EmotionsList from '../constants/EmotionsList';
import EmotionDefinitions from '../constants/EmotionDefinitions';

const BubbleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 0.25rem 0 0 1rem;
  text-align: center;
`
const StyledH2Light = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 0 0;
  font-weight: 300;
  text-align: center;

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
    this.state = {
      baseEmotion: this.props.baseEmotion,
      selected : false,
      selectedEmotion : '',
      message : '',
      level: this.props.level,
      value: ''
    };
  }

  createEmotionList() {
    const level = this.state.level;
    const baseEmotion = this.state.baseEmotion;
    let emotionLevel = EmotionsList[level];
    let emotionList = emotionLevel[baseEmotion];
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

  handleValue(val) {
    this.setState({ value: val });
  }

  render() {
    const level = this.state.level;
    const baseEmotion = this.state.baseEmotion;
    let emotionLevel = EmotionsList[level];
    let emotionList = emotionLevel[baseEmotion];
    let emotionCategory = EmotionDefinitions[baseEmotion];

    return (
      <div>
        <PageContainer baseEmotion={baseEmotion}>
          {this.state.selected &&
          <TransparentDiv/>
          }
          <nav>
            <NavLink href={`/${this.state.level}`}>
              <BackButton emotion={baseEmotion}/>
            </NavLink>
          </nav>
          <StyledH2Light>So you are feeling <span className="base-emotion">{baseEmotion}</span>.</StyledH2Light>
          <StyledH2>How {baseEmotion} are you?</StyledH2>
          <SliderContainer>
            <EmotionSlider emotion={this.state.baseEmotion} value={this.handleValue}></EmotionSlider>
          </SliderContainer>
          <BubbleContainer>
            {emotionList.map((emotion, i) => {
              let emo = emotion["emotion"];
              let maxVal = emotion["max"]
              let minVal = emotion["min"];
              return(<Bubble
                key={i}
                selected={this.state.selectedEmotion}
                handleClose={this.handleClose}
                handleClick={this.handleClick}
                smallBubble={true}
                emotion={emo}
                maxVal={maxVal}
                minVal={minVal}
                value={this.state.value}
                shown={this.state.value >= minVal && this.state.value <= maxVal}
                baseEmotion={this.state.baseEmotion}
                definition={emotionCategory[emo]}>
              </Bubble>)
            })}
          </BubbleContainer>
        </PageContainer>
        <nav><NavLink href={`/${this.state.level}/${this.state.baseEmotion}/${this.state.selectedEmotion}/itsOkay`}>
            <Button show={this.state.selected} emotion={this.state.baseEmotion} text='Continue'></Button>
        </NavLink></nav>
      </div>
    )
  }
}
export default (SubEmotion);
