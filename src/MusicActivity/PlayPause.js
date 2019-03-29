import React, { Component } from "react";
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${props => props.theme.brandPrimary};
  display: flex;
  align-items: center;
  justify-content: ${props => props.playing ? "center" : "flex-start"};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
`
const Play = styled.div`
  width: 0;
  height: 0;
  border-top: 1.25rem solid transparent;
  border-bottom: 1.25rem solid transparent;
  border-left: 2.5rem solid white;
  margin-left: 1.5rem;
`
const Stop = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background-color: white;
`

class PlayPause extends Component {
  render() {
    return(
      <Circle
        playing={this.props.playing}
        onClick={(evt) => this.props.handleClick(evt)}
      >
        {this.props.playing ? <Stop/> : <Play/>}
      </Circle>
    );
  }
}

export default (PlayPause);
