import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBrush = styled.img`
  width: 100%;
  margin: 20px 0px;
  transition: all 120ms ease-in-out;
  &:hover {
  filter: drop-shadow(2px 2px 25px rgba(0,0,0,0.5));
  }
`

class Brush extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : false
    }
    this.setStroke= this.setStroke.bind(this);
  }

  setStroke() {
    this.props.handleClick(this.props.stroke);
  }

  render() {
    return (
      <StyledBrush src={this.props.src} onClick={this.setStroke} ></StyledBrush>
    );
  }
}

export default (Brush);
