import React, { Component } from 'react';
//import axios from 'axios';
import Bubble from './Components/Bubble';
import Button from './Components/Button';
import styled from 'styled-components';
import './styles/styles.scss';
import { withTheme } from 'styled-components'

const StyledApp = styled.div`
  background: ${props => props.theme.background};
  position: fixed;
  height: 100vh;
  width: 100%;
`
const BubbleContainer = styled.div`
  text-align: center;
  overflow: auto;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selected : false,
      selectedEmotion : '',
      message : '',
    };
  }
  handleClick(emotion, evt) {
    if (!this.state.selected) {
      this.setState({ selected: true, selectedEmotion: emotion });
    }
  }

  handleClose() {
    console.log('close');
    if (this.state.selected) {
      this.setState({ selected: false, selectedEmotion: '' });
    }
  }

  componentDidMount() {
    //axios.get('https://mindfully.now.sh/api/index.js',{
    //method: 'GET',
    //mode: 'no-cors',
    //headers: {
    //'Access-Control-Allow-Origin': '*',
    //}
    //})
    //.then(res => {
    //const message = res.data;
    //this.setState({ message });
    //})
  }
  render() {
    return (
      <StyledApp className="App">
        <p>{ this.state.message } </p>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="joyful">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="angry">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="sad">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="afraid">
          </Bubble>
          <Bubble
            selected= {this.state.selectedEmotion}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            emotion="disgust">
          </Bubble>
        </BubbleContainer>
        <Button show={this.state.selected} text='Continue'></Button>
      </StyledApp>
    );
  }
}

export default withTheme(App);
