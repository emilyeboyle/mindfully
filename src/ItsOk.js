import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types';
import Button from './Components/Button';
import BunnyBody from './static/images/bunnies/BunnyBody';

const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 4.25rem;
  font-weight: 600;
`

const StyledText = styled.p`
  font-family: 'Poppins';
  font-size: 1.75rem;
  font-weight: 300;
`

class ItsOk extends Component {
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    return (
      <div>
        <BunnyBody emotion={emotion}/>
        <StyledHeader color={themeColor}>
          It's great that you feel peaceful.
        </StyledHeader>
        <StyledText>
          All types of happiness are a reaction to feeling connected or sensory pleasure.
          Why don’t we do an activity to help you reflect on this feeling?
        </StyledText>
        <Button text='Continue'></Button>
      </div>
    );
  }
}

ItsOk.propTypes = {
  emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
}

export default withTheme(ItsOk);
