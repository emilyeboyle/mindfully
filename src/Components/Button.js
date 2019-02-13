import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components'

const StyledLink = styled.p`
  display: ${(props) => props.show ? "block" : "none"};
  background: ${props => props.color};
  position: absolute;
  text-align: center;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: black;
  border-radius: 38.5px;
  padding: 14px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
  font-family: 'Poppins';
  font-size: 20px;
  width: 130px;
  cursor: pointer;
  z-index: 1;
`

class Button extends Component {
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    return(
      <StyledLink color={themeColor} emotion= {this.props.selectedEmotion} show={this.props.show}>
          {this.props.text}
      </StyledLink>
    );
  }
}

Button.propTypes = {
  emotion: PropTypes.oneOf(['', 'angry', 'joyful', 'sad', 'disgust', 'afraid'])
}

export default withTheme(Button);
