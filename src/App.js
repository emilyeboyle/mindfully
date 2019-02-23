import React, { Component, Suspense } from 'react';
//import axios from 'axios';
import styled from 'styled-components';
import './styles/styles.scss';
import { withTheme } from 'styled-components';
import { mount, route } from 'navi'
import { Router, View } from 'react-navi'
import Emotion from './pages/Emotion'
import SubEmotion from './pages/SubEmotion'
import Okay from './pages/Okay'

const routes =
  mount({
    // Create the index route
    '/': route({
      title: "Emotion",
      view: <Emotion />,
    }),

    // Create the emotion route
    '/:emotion': route(async req =>{
      let {emotion} = req.params
      return {
        view: <SubEmotion baseEmotion={emotion}/>,
      }
    }),

    // Create the itsok route
    '/:emotion/:subemotion/itsOkay': route(async req=>{
      let {emotion, subemotion} = req.params
      return{
      view: <Okay baseEmotion={emotion} subEmotion={subemotion}/>,
      }
    }),
  })

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
