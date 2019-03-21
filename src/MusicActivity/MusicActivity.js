import React, { Component } from "react";
import Grid from './Grid';
import Button from '../Components/Button';
import Notes from './Notes';
import Tone from 'tone';

const initialCellState = { triggered: false, activated: false };
const initialSequence = [
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState),
  new Array(14).fill(initialCellState)
];
const noteNames = Notes['notes'];
let sound = new Tone.Synth().toMaster();

class MusicActivity extends Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      playing: false,
      currentStep: 0,
      sequence: initialSequence
    };
  }

  handleClick(evt) {
    this.setState({
      playing: !this.state.playing
    });

    console.log(this.state.playing);
  }

  toggleStep(sound, step) {
    const sequenceCopy = [...this.state.sequence];
    const {triggered, activated} = sequenceCopy[sound][step];
    sequenceCopy[sound][step] = {
      triggered: !triggered,
      activated: !activated
    }
    this.setState({sequence: sequenceCopy});
    console.log("toggled");
  }

  render() {
    return (
      <div>
        <Grid sequence={this.state.sequence} toggleStep={this.toggleStep}/>
        <p onClick={this.handleClick}>Play</p>
      </div>
    );
  }
}

export default (MusicActivity);
