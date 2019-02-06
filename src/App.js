import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import Bubble from './Components/Bubble';
import styled from 'styled-components';

const BubbleContainer = styled.div`
  height: 100vh;
  
  text-align: center;
`

class App extends Component {
  state = {
    message:''
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
      <div className="App">
        <p>{ this.state.message } </p>
        <BubbleContainer>
          <h2>How are you feeling right now?</h2>
          <Bubble emotion="joyful"></Bubble>
          <Bubble emotion="angry"></Bubble>
          <Bubble emotion="sad"></Bubble>
          <Bubble emotion="afraid"></Bubble>
          <Bubble emotion="disgust"></Bubble>
        </BubbleContainer>
      </div>
    );
  }
}

export default App;
