import React, { Component } from 'react';
import { NavLink } from 'react-navi'
import Bubble from '../Components/Bubble';
import Button from '../Components/Button';
import styled from 'styled-components';

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
  margin: 2rem 1rem 1rem;
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

class Emotion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selected : false,
      selectedEmotion : '',
      message : '',
      level: this.props.level,
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
        <Container>
          {this.state.selected &&
          <TransparentDiv/>
          }
          <StyledH2>How are you feeling right now?</StyledH2>
          <BubbleContainer>
            <Bubble
              selected= {this.state.selectedEmotion} handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion="joyful"
              baseEmotion="joyful"
              subEmotion={false}
              shown={true}>
            </Bubble>
            <Bubble
              selected= {this.state.selectedEmotion}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              emotion="angry"
              baseEmotion="angry"
              subEmotion={false}
              shown={true}>
            </Bubble>
            <Bubble
      selected= {this.state.selectedEmotion}
      handleClose={this.handleClose}
      handleClick={this.handleClick}
      emotion="sad"
      baseEmotion="sad"
      subEmotion={false}
      shown={true}>
    </Bubble>
    <Bubble
      selected= {this.state.selectedEmotion}
      handleClose={this.handleClose}
      handleClick={this.handleClick}
      emotion="afraid"
      baseEmotion="afraid"
      subEmotion={false}
      shown={true}>
    </Bubble>
    <Bubble
      selected= {this.state.selectedEmotion}
      handleClose={this.handleClose}
      handleClick={this.handleClick}
      emotion="disgusted"
      baseEmotion="disgusted"
      subEmotion={false}
      shown={true}>
    </Bubble>
    {this.state.level == 3  && 
    <Bubble
      selected= {this.state.selectedEmotion}
      handleClose={this.handleClose}
      handleClick={this.handleClick}
      emotion="unsure"
      baseEmotion="unsure"
      subEmotion={false}
      shown={true}>
    </Bubble>
    } 
  </BubbleContainer>
</Container>
<div>{this.props.selectedEmotion}</div>
{this.state.level == 1 ? (
  <nav>
    <NavLink href={`/${this.state.level}/${this.state.selectedEmotion}/${this.state.selectedEmotion}/itsOkay`}>
      <Button show={this.state.selected} emotion={this.state.selectedEmotion} text='Continue'></Button>
    </NavLink>
  </nav>
) :(
  <nav>
    <NavLink href={`/${this.state.level}/${this.state.selectedEmotion}`}>
      <Button show={this.state.selected} emotion={this.state.selectedEmotion} text='Continue'></Button>
    </NavLink>
  </nav>
)}
    </div>
    )
  }
}
export default (Emotion);
