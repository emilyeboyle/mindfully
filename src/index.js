import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import './styles/bunnyBodyStyles.scss'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';

const styleGuide = {
  background: '#F5F6F6',
  brandPrimary : '#90D2D5',
  brandSecondary: '#C8FFFF',
  angryPrimary: '#E93054',
  angrySecondary: '#E86282',
  angryBackground: 'rgba(231, 48, 84, 0.1)',
  joyfulPrimary: '#F8B034',
  joyfulSecondary: '#F8C06D',
  joyfulBackground: 'rgba(248, 176, 50, 0.1)',
  disgustPrimary: '#1CAA81',
  disgustSecondary: '#3EBB93',
  disgustBackground: 'rgba(28, 170, 129, 0.1)',
  sadPrimary: '#075D91',
  sadSecondary: '#277DA8',
  sadBackground: 'rgba(38, 124, 167, 0.1)',
  afraidPrimary: '#464FA1',
  afraidSecondary: '#626DAA',
  afraidBackground: 'rgba(68, 80, 162, 0.1)'
}

  ReactDOM.render(
    <ThemeProvider theme={styleGuide}>
      <App/>
    </ThemeProvider>,document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
