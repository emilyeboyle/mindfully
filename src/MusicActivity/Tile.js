import React, { Component } from "react";
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 12.5vw;
  height: 5.5vh;
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-color: ${props => props.theme.brandPrimary};
  background: ${(props) => props.color}
  filter: ${(props) => (props.activated && props.highlight) ? "brightness(75%)" : "brightness(100%)"}
`

class Tile extends Component {
  render() {
    let highlight = (this.props.currentStep === this.props.column && this.props.playing);
    let fillColor;
    if (this.props.activated) {
      fillColor = this.props.color;
    } else if (!this.props.activated && highlight) {
      fillColor = "#E9F8F9";
    } else {
      fillColor = "white";
    }

    return(
      <StyledTile
        onClick={(evt) => this.props.handleClick(evt)}
        highlight={highlight}
        activated={this.props.activated}
        color={fillColor}
      />
    );
  }
}

export default (Tile);
