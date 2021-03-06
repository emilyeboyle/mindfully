import React, { Component } from "react";
import styled from 'styled-components';
import Grid from './Grid';
import PlayPause from './PlayPause';
import Notes from './Notes';
import Tone from 'tone';
import Button from '../Components/Button';
import Modal from '../Components/Modal';
import { NavLink } from 'react-navi';
import ReactTimeout from 'react-timeout';

const noteNames = Notes['notes'];
let music = new Tone.PolySynth(8, Tone.Synth).set({
  'volume' : -2,
			'oscillator' : {
				'type' : 'triangle17',
			},
			'envelope' : {
				'attack' : 0.01,
				'decay' : 0.1,
				'sustain' : 0.2,
				'release' : 1.7,
			}
}).toMaster();
const initialCellState = {
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
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
`

class MusicActivity extends Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.warning = this.warning.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      playing: false,
      currentStep: 0,
      sequence: initialSequence,
      showModal: true,
      modalText: "intro"
    };

    this.musicLoop = new Tone.Sequence((time, i) => {
      const sequenceCopy = [...this.state.sequence];
        for (let j = 0; j < sequenceCopy[i].length; j++) {
          const {activated, note} = sequenceCopy[i][j];
          sequenceCopy[i][j] = {activated, note};
          if (activated) {
            music.triggerAttackRelease(note, '8n', time);
          }
        }
      this.setState({sequence: sequenceCopy, currentStep: i});
    }, [...new Array(8)].map((v, i) => i), '4n');

    this.musicLoop.start();
  }

  componentWillUnmount() {
    Tone.Transport.stop();
  }

  modalClose() {
    this.setState({showModal: false});
    if (this.state.modalText === "intro") {
      this.setWarnTimeout();
    } else if (this.state.modalText === "warn") {
      this.setRedirectTimeout();
    }
  }

  setWarnTimeout() {
    const warningTime = (1000 * 60 * 2);
    this.warnTimeout = this.props.setTimeout(this.warning, warningTime);
  };

  setRedirectTimeout() {
    const redirectTime = (1000 * 60);
    this.redirectTimeout = this.props.setTimeout(this.redirect, redirectTime);
  }

  warning() {
    this.setState({
      modalText: "warn",
      showModal: true
    });
  }

  redirect() {
    window.location.assign("/thankYou");
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
    const {activated} = sequenceCopy[sound][step];

    if (!sequenceCopy[sound][step]["activated"] && !this.state.playing) {
      music.triggerAttackRelease(noteNames[step], '8n');
    }

    sequenceCopy[sound][step] = {
      activated: !activated,
      note: noteNames[step]
    }

    this.setState({sequence: sequenceCopy});
  }

  handleClear(evt) {
    const sequenceCopy = [...this.state.sequence];
    for (let i = 0; i < sequenceCopy.length; i++) {
      for (let j = 0; j < sequenceCopy[i].length; j++) {
        if (sequenceCopy[i][j]["activated"]) {
          sequenceCopy[i][j] = {
            activated: false,
            note: ""
          }
        }
      }
    }
    this.setState({
      sequence: sequenceCopy
    });
  }

  render() {
    let modalText;
    if (this.state.modalText === "intro") {
      modalText = "Click on different parts of the grid to make music! The activity will time out after 3 minutes."
    } else if (this.state.modalText === "warn") {
      modalText = "You have one minute remaining."
    }
    return (
      <div>
        <Grid
          sequence={this.state.sequence}
          toggleStep={this.toggleStep}
          currentStep={this.state.currentStep}
          playing={this.state.playing}
        />
        <ButtonsContainer>
          <Button
            text="Clear"
            absolute={false}
            emotion="brandPink"
            handleClick={this.handleClear}
            clickFunction={true}
          />
          <PlayPause playing={this.state.playing} handleClick={this.handleClick}/>
          <nav>
            <NavLink href={'/thankYou'}>
              <Button text='Done' emotion="brand" show={true} absolute={false}/>
            </NavLink>
          </nav>
        </ButtonsContainer>
        <Modal
          open={this.state.showModal}
          handleClose={this.modalClose}
          text={modalText}
        />
      </div>
    );
  }
}

export default ReactTimeout(MusicActivity);
