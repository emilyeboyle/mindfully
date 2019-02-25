import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components'

const StyledLink = styled.p`
  display: ${(props) => props.show ? "block" : "none"};
  color: ${(props) => props.whiteText ? "white" : "black"};
  background: ${props => props.color};
  position: absolute;
  text-align: center;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
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
    const colors = ['afraidPrimary', 'sadPrimary', 'angryPrimary'];
    let whiteText = colors.indexOf(emotionString) > -1;
    const absolute = this.props.absolute;
    console.log(absolute);
    return(
      <StyledLink color={themeColor} whiteText={whiteText} emotion= {this.props.selectedEmotion} show={this.props.show}>
          {this.props.text}
      </StyledLink>
    );
  }
}

Button.defaultProps = {
  emotion: 'brand',
  show: 'true'
}

export default withTheme(Button);
