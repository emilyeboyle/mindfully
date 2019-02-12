import React, { Component } from 'react';
//import axios from 'axios';
import styled from 'styled-components';
import './styles/styles.scss';
import { withTheme } from 'styled-components';
import { NavProvider, NavContent, NavNotFoundBoundary } from 'react-navi';

const StyledApp = styled.div`
  background: ${props => props.theme.background};
  position: fixed;
  height: 100vh;
  width: 100%;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : '',
    };
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
      <NavProvider navigation={this.props.navigation}>
        <StyledApp className="App">
          <p>{ this.state.message } </p>
          <NavNotFoundBoundary render={renderNotFound}>
              <NavContent/>
            </NavNotFoundBoundary>
        </StyledApp>
      </NavProvider>
    );
  }
}

function renderNotFound() {
  return (
    <div className='App-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default withTheme(App);
