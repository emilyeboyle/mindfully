import React, { Component } from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

const StyledEllipse = styled.ellipse`
  fill:  ${props => props.color};
  opacity: 0.5;
`

const StyledBunnyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 345px;
`

class BunnyBody extends Component {
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];

    return (
      <StyledBunnyContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 239 223.86"
          width="345px"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path className="cls-1" d="M134.22,50.51s9-46,21.7-48.83C172.46-2,166.9,51,154.5,60.51"/>
              <StyledEllipse color={themeColor} cx="119.5" cy="198.51" rx="119.5" ry="25.35"/>
              <path className="cls-3" d="M72.5,178.51s-29.34,18,15,13.85"/>
              <path className="cls-3" d="M167,180.51s29.34,18-15,13.85"/>
              <path className="cls-1" d="M100.5,50.51s-9-46-21.7-48.83C62.26-2,70.1,51,82.5,60.51"/>
              <path className="cls-1" d="M91.39,127.51s-25.89,31-15.91,58.11c6.84,18.6,81.87,22.23,88.94-1.83,5.08-17.28-.74-48.4-17.79-56.28"/>
              <path className="cls-4" d="M97.42,130.83S67.4,181.25,88,194l-8-5s-9.75-3.45-3-32c.08-.34.83-3.69,1-4l12.86-24Z"/>
              <path className="cls-1" d="M165,92.49c0,29.38-20.11,41.52-45.93,41.52S71.5,121.87,71.5,92.49s20.93-53.21,46.75-53.21S165,63.1,165,92.49Z"/>
              <path className="cls-1" d="M88,83.34s9.34-11.5,19.5,1"/>
              <path className="cls-1" d="M123.5,83.34s9.34-11.5,19.5,1"/>
              <path className="cls-1" d="M105,111.93c8.29,3.32,8.29-9.39,8.29-9.39s6.63,12.15,12.71,6.63"/>
              <path className="cls-5" d="M113.5,91.51s-11,3-7,7,7,4,7,4a9.79,9.79,0,0,0,5-5C120.5,93.51,116.5,91.51,113.5,91.51Z"/>
              <ellipse className="cls-6" cx="139.61" cy="98.01" rx="7.75" ry="5"/>
              <path className="cls-4" d="M97.2,46.37S75.94,71.81,76.34,85.83c.75,25.7,11.92,36.71,21.61,41.3L97.2,129s-25.33-5.5-24.58-38.54c0,0,0-16.52,8.94-28.45A49.07,49.07,0,0,1,97.2,46.37Z"/>
              <ellipse className="cls-7" cx="80.5" cy="26.51" rx="5.1" ry="18" transform="translate(-3.34 14.1) rotate(-9.81)"/>
              <ellipse className="cls-7" cx="153.5" cy="25.51" rx="18" ry="5.1" transform="translate(97.35 170.63) rotate(-78.28)"/>
              <ellipse className="cls-6" cx="90.89" cy="98.01" rx="7.75" ry="5"/>
              <path className="cls-3" d="M92,173.94c-4.39,5.12.06,21.11,1.52,22.57.91.91,6.43,11.55,14.94,7.54a8.64,8.64,0,0,0,3.81-11.94c-1.52-2.8-3.09-6.16-3.45-8.66"/>
              <path className="cls-3" d="M144.42,173.94c4.39,5.12-.06,21.11-1.52,22.57-.91.91-6.42,11.55-14.94,7.54a8.65,8.65,0,0,1-3.81-11.94c1.52-2.8,3.1-6.16,3.45-8.66"/>
            </g>
          </g>
        </svg>
      </StyledBunnyContainer>
    );
  }
}

export default withTheme(BunnyBody);
