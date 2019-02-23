import React, { Component, Suspense } from 'react';
//import axios from 'axios';
import styled from 'styled-components';
import './styles/styles.scss';
import { withTheme } from 'styled-components';
import { Router, View } from 'react-navi';
import routes from './pages/routes';


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
      <Router routes={routes}>
        <Suspense fallback={null}>
          <StyledApp className="App">
            <p>{ this.state.message } </p>
            <View />
          </StyledApp>
        </Suspense>
      </Router>
    );
  }
}


export default withTheme(App);
