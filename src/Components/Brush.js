import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBrush = styled.img`
  width: 100%;
  margin: ${(props) => props.selected ? "20px -32px" : "20px -35px"};
  filter: ${(props) => props.selected ? "drop-shadow(2px 2px 25px rgba(0,0,0,0.5));" : "none"};
  transition: all 120ms ease-in-out;
`

class Brush extends Component {
  constructor(props) {
    super(props);
    this.setStroke= this.setStroke.bind(this);
  }

  setStroke() {
    this.props.handleClick(this.props.stroke);
  }

  render() {
    return (
      <StyledBrush selected={this.props.stroke === this.props.selected} src={this.props.src} onClick={this.setStroke} ></StyledBrush>
    );
  }
}

export default (Brush);
