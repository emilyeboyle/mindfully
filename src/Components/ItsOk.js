import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Components/Button';
import BunnyBody from '../Components/BunnyBody';
import ItsOkText from '../constants/ItsOkText';
import { withTheme } from 'styled-components'

const StyledItsOkContainer = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 85%;
`

const StyledTextContainer = styled.div`
  margin-left: 2rem;
`

const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 4.25rem;
  font-weight: 600;
  line-height: 6rem;
  margin: 0 0 1rem 0;
`

const StyledText = styled.p`
  font-family: 'Poppins';
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 2.5rem;
`

class ItsOk extends Component {
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    let text;

    if (emotion === 'joyful') {
      text="great"
    } else {
      text="okay"
    }

    return (
      <div>
        <StyledItsOkContainer>
          <BunnyBody emotion={emotion}/>
          <StyledTextContainer>
            <StyledHeader color={themeColor}>
              It's {text} that you feel {this.props.specificEmotion}.
            </StyledHeader>
            <StyledText>
              {ItsOkText[emotion]} Why don’t we do an activity to help you reflect on this feeling?
            </StyledText>
          </StyledTextContainer>
        </StyledItsOkContainer>
        <Button text='Continue' emotion={emotion} show={true}/>
      </div>
    );
  }
}

ItsOk.propTypes = {
  emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid']),
  specificEmotion: PropTypes.string.isRequired
}

export default withTheme(ItsOk);