import React, { Component } from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

const bubbleup = (moveX, moveY) => keyframes`
   0% {
       transform: translate(0px, 0px);
       animation-timing-function:ease-in-out
   }

   100% {
       transform: translate(${moveX}, ${moveX});
       animation-timing-function:ease-in-out
   }

`
const StyledBubbleContainer = styled.div`
  width: 100px;
  margin: 20px 20px;
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  transition: all 120ms ease-in-out;
  display: inline-block;
  animation: ${props => bubbleup(props.moveX, props.moveY)} 10s linear infinite alternate;
  opacity: ${props => props.clicked ? 0 : 1};
  -webkit-tap-highlight-color: transparent;

  :focus {
    outline: none;
  }
`

class GameBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked : false,
      x: (Math.random() * (window.innerWidth - 75)) + 'px',
      y: (Math.random() * (window.innerHeight - 75)) + 'px',
    }
    this.setClicked = this.setClicked.bind(this);
  }

  setClicked() {
    this.setState({
      clicked : true,
    })
  }


  render() {
    if (this.state.clicked) {
      return (
        <StyledBubbleContainer
          clicked={this.state.clicked}
          x={this.state.x}
          y={this.state.y}
          onClick={this.setClicked}
          moveX={this.props.moveX}
          moveY={this.props.moveY}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            <defs><style>{`.a{fill:#93c9ed;}`}</style></defs>
            <path className="a" d="M56.17,60.5a6.76,6.76,0,0,1,8.22-10.74C67.35,52,72.81,66,72.81,66S59.13,62.77,56.17,60.5Z"/>
            <path className="a" d="M234.35,51a6.76,6.76,0,0,1,10.74,8.22c-2.27,3-16.23,8.42-16.23,8.42S232.08,54,234.35,51Z"/>
            <path className="a" d="M245.26,239.5A6.76,6.76,0,0,1,237,250.24c-3-2.27-8.42-16.23-8.42-16.23S242.3,237.23,245.26,239.5Z"/>
            <path className="a" d="M64.22,249a6.76,6.76,0,1,1-10.74-8.22c2.27-3,16.23-8.42,16.23-8.42S66.49,246,64.22,249Z"/>
            <path className="a" d="M26.7,151.79a4.72,4.72,0,1,1-1.24-9.37c2.59-.34,12.17,3.86,12.17,3.86S29.29,151.44,26.7,151.79Z"/>
            <path className="a" d="M142.42,18.59a4.72,4.72,0,1,1,9.37-1.24c.34,2.59-3.86,12.17-3.86,12.17S142.77,21.17,142.42,18.59Z"/>
            <path className="a" d="M280.24,146.8a4.72,4.72,0,1,1,1.24,9.37c-2.59.34-12.17-3.86-12.17-3.86S277.65,147.14,280.24,146.8Z"/>
            <path className="a" d="M156.17,281.91a4.72,4.72,0,0,1-9.37,1.24c-.34-2.59,3.86-12.17,3.86-12.17S155.82,279.32,156.17,281.91Z"/>
            <path className="a" d="M93.94,171.5a3.13,3.13,0,0,1-2.9-5.56c1.53-.8,8.46-.35,8.46-.35S95.47,170.7,93.94,171.5Z"/>
            <path className="a" d="M124.92,94.85a3.13,3.13,0,1,1,5.56-2.9c.8,1.53.35,8.46.35,8.46S125.72,96.39,124.92,94.85Z"/>
            <path className="a" d="M206.18,127.26a3.13,3.13,0,0,1,2.9,5.56c-1.53.8-8.46.35-8.46.35S204.64,128.06,206.18,127.26Z"/>
            <path className="a" d="M174.63,205.11a3.13,3.13,0,0,1-5.56,2.9c-.8-1.53-.35-8.46-.35-8.46S173.83,203.57,174.63,205.11Z"/>
          </svg>
        </StyledBubbleContainer>
      );
    } else {
      return (
        <StyledBubbleContainer
          clicked={this.state.clicked}
          x={this.state.x}
          y={this.state.y}
          onClick={this.setClicked}
          moveX={this.props.moveX}
          moveY={this.props.moveY}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.08 299.08">
            <defs><style>{`.a{ fill:#84c5e2;} .b{fill:#93c9ed;} .c{fill:#fdfefe;opacity:0.75;}`}</style></defs>
            <circle className="a" cx="149.54" cy="149.54" r="149.54"/>
            <ellipse className="b" cx="151.08" cy="145.39" rx="147.15" ry="144.53"/>
            <path className="c" d="M280.15,129.91c-9.89-26.28-31.33-48.18-59.41-59.3L235.87,49A98,98,0,0,1,280.15,129.91Z"/>
          </svg>
        </StyledBubbleContainer>
      );
    }
  }
}

export default (GameBubble);
