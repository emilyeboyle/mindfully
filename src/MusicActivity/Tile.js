import React, { Component } from "react";
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 12.5vw;
  height: 5.5vh;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: ${(props) => props.activated ? props.color : "white"}
`

class Tile extends Component {
  render() {
    return(
      <StyledTile
        onClick={(evt) => this.props.handleClick(evt)}
        activated={this.props.activated}
        color={this.props.color}
      />
    );
  }
}

export default (Tile);
