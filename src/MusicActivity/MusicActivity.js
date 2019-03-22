import React, { Component } from "react";
import Grid from './Grid';
import Button from '../Components/Button';
import Notes from './Notes';
import Tone from 'tone';

const noteNames = Notes['notes'];
let music = new Tone.PolySynth(8, Tone.Synth).toMaster();
const initialCellState = {
  triggered: false,
  activated: false,
  note: ""
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

    this.musicLoop = new Tone.Sequence((time, x) => {
      const sequenceCopy = [...this.state.sequence];
      for (let i = 0; i < noteNames.length; i++) {
        const {triggered, activated, note} = sequenceCopy[x][i];
        sequenceCopy[x][i] = {activated, triggered: x === i, note};
        if (activated) {
          music.triggerAttackRelease(note, '8n', time);
        }
        this.setState({sequence: sequenceCopy, currentStep: i});
        console.log(this.state.currentStep);
      }
    }, [...new Array(8)].map((v, i) => i), '8n');

    {/*this.musicLoop.loop = true;*/}
    this.musicLoop.start();
  }

  handleClick(evt) {
    this.setState({
      playing: !this.state.playing
    });
    Tone.Transport.start();
  }

  toggleStep(sound, step) {
    const sequenceCopy = [...this.state.sequence];
    const {triggered, activated, note} = sequenceCopy[sound][step];

    if (!sequenceCopy[sound][step]["activated"]) {
      music.triggerAttackRelease(noteNames[step], '8n');
    }

    sequenceCopy[sound][step] = {
      triggered,
      activated: !activated,
      note: noteNames[step]
    }

    this.setState({sequence: sequenceCopy});
    console.log(this.state.sequence)
  }

  startLoop() {
    if (this.state.playing) {

    }
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
