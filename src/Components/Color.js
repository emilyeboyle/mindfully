import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColor = styled.div`
  border-radius: 100%;
  background: ${props => props.color};
  height: 50px;
  width: 50px;
  margin: 0px 10px;
`

class Color extends Component {
  constructor(props) {
    super(props);
    this.setColor= this.setColor.bind(this);
  }

  setColor() {
    this.props.handleClick(this.props.color);
  }

  render() {
    return (
      <StyledColor onClick={this.setColor} color={this.props.color}></StyledColor>
    );
  }
}

export default (Color);
