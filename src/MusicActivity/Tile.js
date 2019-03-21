import React, { Component } from "react";
import styled from 'styled-components';
import Tone from 'tone';

const StyledTile = styled.div`
  width: 12.5vw;
  height: 5.5vh;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: ${(props) => props.activated ? props.color : "white"}
`
let sound = new Tone.Synth().toMaster();

class Tile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activated: false,
    };
  }

  handleClick(evt) {
    if (!this.state.activated) {
      sound.triggerAttackRelease(this.props.note, '4n');
    }

    this.setState({
      activated: !this.state.activated
    });

    console.log(this.props.column);
  }

  render() {
    return(
      <StyledTile
        onClick={(evt) => this.props.handleClick(evt)}
        activated={this.state.activated}
        color={this.props.color}
      />
    );
  }
}

export default (Tile);
