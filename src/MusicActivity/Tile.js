import React, { Component } from "react";
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 12.5vw;
  height: 5.5vh;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: ${(props) => props.activated ? props.color : "white"}
  border-color: ${(props) => (props.playing && props.currentStep === props.column) ? "blue" : "black"}
`

class Tile extends Component {
  render() {
    return(
      <StyledTile
        onClick={(evt) => this.props.handleClick(evt)}
        activated={this.props.activated}
        currentStep={this.props.currentStep}
        playing={this.props.playing}
        color={this.props.color}
        column={this.props.column}
      />
    );
  }
}

export default (Tile);
