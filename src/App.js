import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
