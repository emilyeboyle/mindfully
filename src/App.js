import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import Bubble from './Components/Bubble';
import Button from './Components/Button';
import styled from 'styled-components';
import './styles/styles.scss';

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
  state = {
    message:'',
    selected : false,
  }

  componentDidMount() {
    axios.get('https://mindfully.now.sh/api/index.js',{
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(res => {
        const message = res.data;
        this.setState({ message });
      })
  }
  render() {
    return (
      <StyledApp className="App">
        <p>{ this.state.message } </p>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <Bubble onClick={this.setSelected} emotion="joyful"></Bubble>
          <Bubble emotion="angry"></Bubble>
          <Bubble emotion="sad"></Bubble>
          <Bubble emotion="afraid"></Bubble>
          <Bubble emotion="disgust"></Bubble>
        </BubbleContainer>
        <Button text='Continue'></Button>
      </StyledApp>
    );
  }
}

export default App;
