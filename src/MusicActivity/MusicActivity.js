import React, { Component } from "react";
import Grid from './Grid';
import Button from '../Components/Button';
import Notes from './Notes';
import Tone from 'tone';


const noteNames = Notes['notes'];
let music = new Tone.Synth().toMaster();
const initialCellState = {
  triggered: false,
  activated: false,
  note: "C4"
};
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
    const {triggered, activated, note} = sequenceCopy[sound][step];

    if (!sequenceCopy[sound][step]["activated"]) {
      music.triggerAttackRelease(noteNames[step], '8n');
    }

    sequenceCopy[sound][step] = {
      triggered: !triggered,
      activated: !activated,
      note: noteNames[step]
    }

    this.setState({sequence: sequenceCopy});
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
