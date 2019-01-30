import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'fetch';

class App extends Component {
  static getInitialProps(context) {
    fetch("http://kreata.ee/iso-8859-15.php", function(error, meta, body) {
      console.log(body.toString());
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
