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

    this.musicLoop = new Tone.Sequence((time, i) => {
      const sequenceCopy = [...this.state.sequence];
        for (let j = 0; j < sequenceCopy[i].length; j++) {
          const {triggered, activated, note} = sequenceCopy[i][j];
          sequenceCopy[i][j] = {activated, triggered, note};
          if (activated) {
            music.triggerAttackRelease(note, '8n', time);
          }
        }
      this.setState({sequence: sequenceCopy, currentStep: i});
    }, [...new Array(8)].map((v, i) => i), '4n');

    this.musicLoop.start();
  }

  handleClick(evt) {
    if (!this.state.playing) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }

    this.setState({
      playing: !this.state.playing
    });
  }

  toggleStep(sound, step) {
    const sequenceCopy = [...this.state.sequence];
    const {triggered, activated} = sequenceCopy[sound][step];

    if (!sequenceCopy[sound][step]["activated"] && !this.state.playing) {
      music.triggerAttackRelease(noteNames[step], '8n');
    }

    sequenceCopy[sound][step] = {
      triggered,
      activated: !activated,
      note: noteNames[step]
    }

    this.setState({sequence: sequenceCopy});
  }

  render() {
    return (
      <div>
        <Grid
          sequence={this.state.sequence}
          toggleStep={this.toggleStep}
          currentStep={this.state.currentStep}
          playing={this.state.playing}
        />
        <p onClick={this.handleClick}>{this.state.playing ? "Stop" : "Play"}</p>
      </div>
    );
  }
}

export default (MusicActivity);
