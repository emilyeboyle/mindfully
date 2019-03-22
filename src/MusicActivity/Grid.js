import React, { Component } from "react";
import styled from 'styled-components';
import Tile from './Tile';
import Notes from './Notes';

const Container = styled.div`
  display: flex;
`
class Grid extends Component {
  createGrid(sequence, toggleStep) {
    let grid = [];
    let colorsList = Notes['colors'];

    {sequence.map((sound, i) => {
      let squares = [];
      sound.map((time, j) => {
        squares.push(
          <Tile
            key={i + j}
            row={i}
            column={j}
            color={colorsList[j]}
            activated={sequence[i][j]["activated"]}
            triggered={sequence[i][j]["triggered"]}
            handleClick={() => toggleStep(i, j)}
          />
        );
      })
      grid.push(<div key={i}>{squares}</div>)
    })
    }

    return (
      grid
    );
  }

  render() {
    return(
      <Container>
        {this.createGrid(this.props.sequence, this.props.toggleStep)}
      </Container>
    );
  }
}

export default (Grid);
