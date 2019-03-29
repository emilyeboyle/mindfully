import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components';

const Circle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${props => props.color};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  left: 2rem;
  top: 2rem;
`

class BackButton extends Component {
  renderArrow() {
    return(
      <svg
        width="41px"
        height="29px"
        viewBox="0 0 41 29"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="03---It's-Ok"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <path
            d="M21.1116914,10 L39.9730458,10 L39.9730458,19.3403361 L21.1116914,19.3403361 L21.1116914,28.1116914 L0.370451482,14.3706199 L21.1116914,0.629548518 L21.1116914,10 Z"
            id="Combined-Shape"
          />
        </g>
      </svg>
    );
  }
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    return(
      <Circle color={themeColor}>
        {this.renderArrow()}
      </Circle>
    );
  }
}

export default withTheme(BackButton);
