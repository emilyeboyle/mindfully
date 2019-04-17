import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../Components/Button';
import Bunny from '../static/images/bunnies/monocleBunny.png';
import Bubble from '../Components/Bubble';
import { NavLink } from 'react-navi';
import EmotionDefinitions from '../constants/EmotionDefinitions';
import ActivityList from '../constants/ActivityList';
import ActivityText from '../constants/ActivityText';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 85%;
`
const StyledBunnyContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto;
  height: 75vh;
  width: 85%;
`
const StyledTextContainer = styled.div`
  margin-left: 2rem;
`
const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
`
const StyledBunnyHeader = styled.h1`
  color: ${props => props.theme.brandPrimary};
  font-family: 'Poppins';
  font-size: 3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`
const StyledBunnyText = styled.p`
  font-family: 'Poppins';
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;
`
const BubblesContainer = styled.div`
  display: flex;
`
const StyledDefinition = styled.p`
  font-family: 'Poppins';
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
`
const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`
const StyledLink = styled.a`
  color: ${props => props.theme.brandPinkPrimary};
  font-family: 'Poppins';
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`
const StyledImage = styled.img`
  width: 345px;
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

class UnsureEmotions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setActivity = this.setActivity.bind(this);
    this.setEmotions = this.setEmotions.bind(this);

    this.state = {
      selected: false,
      selectedEmotion : '',
      activity: '',
      emotion1: '',
      emotion2: '',
      level: props.level,
    }
  }

  componentDidMount() {
    this.setEmotions();
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

  setActivity() {
    const activityList = ActivityList['activities']['unsure'];
    const activitiesLength = activityList.length;
    const random = Math.floor(Math.random() * activitiesLength);
    const randomActivity = activityList[random];
    this.setState({activity: randomActivity});
  }

  setEmotions() {
    const emotions = (this.props.emotions).toString().split("+");
    const emotion1 = emotions[0];
    const emotion2 = emotions[1];
    this.setState({
      emotion1: emotion1,
      emotion2: emotion2
    });

    if (emotion1 === "undefined") {
      this.setActivity();
    }
  }

  renderEmotions() {
    let emotionCategory1 = EmotionDefinitions[this.state.emotion1];
    let emotionCategory2 = EmotionDefinitions[this.state.emotion2];

    return (
      <StyledContainer>
        {this.state.selected &&
          <TransparentDiv/>
        }
        <StyledHeader>You might be feeling <strong>{this.state.emotion1}</strong> or <strong>{this.state.emotion2}</strong>.</StyledHeader>
        <StyledHeader>Select one that best describes how you feel.</StyledHeader>
        <BubblesContainer>
          <BubbleContainer>
            <Bubble
              selected= {this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion={this.state.emotion1}
              baseEmotion={this.state.emotion1}
              subEmotion={false}
              shown={true}
              definition={emotionCategory1[this.state.emotion1]}
            />
            <StyledDefinition>{emotionCategory1[this.state.emotion1]}</StyledDefinition>
          </BubbleContainer>
          <BubbleContainer>
            <Bubble
              selected={this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion={this.state.emotion2}
              baseEmotion={this.state.emotion2}
              subEmotion={false}
              shown={true}
              definition={emotionCategory2[this.state.emotion2]}
            />
            <StyledDefinition>{emotionCategory2[this.state.emotion2]}</StyledDefinition>
          </BubbleContainer>
        </BubblesContainer>
        <NavLink href='/${this.state.level}/notsure/unsure/itsOkay' style={{marginTop: '3rem'}}>
          <StyledLink>None of these describe my feelings</StyledLink>
        </NavLink>
      </StyledContainer>
    );
  }

  renderBunny() {
    return (
      <StyledBunnyContainer>
        <StyledImage src={Bunny}/>
        <StyledTextContainer>
          <StyledBunnyHeader>Hmmm . . . we're not quite sure what you're feeling, either.</StyledBunnyHeader>
          <StyledBunnyText>{ActivityText[this.state.activity]}</StyledBunnyText>
        </StyledTextContainer>
      </StyledBunnyContainer>
    );
  }

  render() {
    let emotions;
    let showButton;
    if (this.state.emotion1 && this.state.emotion1 !== "undefined") {
      emotions = true;
      showButton = false;
    } else {
      emotions = false;
      showButton = true;
    }
    return (
      <div>
        {emotions ? this.renderEmotions() : this.renderBunny()}
        <NavLink
          href={emotions ? `/${this.state.level}/${this.state.selectedEmotion}/${this.state.selectedEmotion}/itsOkay` : `/${this.state.activity}`}>
          <Button
            text='Continue'
            emotion={emotions ? this.state.selectedEmotion : 'brand'}
            show={emotions ? this.state.selected : showButton}/>
        </NavLink>
      </div>
    );
  }
}

export default (UnsureEmotions);
