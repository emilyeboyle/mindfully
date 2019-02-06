import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';

const styleGuide = {
  brandPrimary : '#90D2D5',
  brandSecondary: '#C8FFFF',
  angryPrimary: '#E93054',
  angrySecondary: '#E86282',
  joyfulPrimary: '#F8B034',
  joyfulSecondary: '#F8C06D',
  disgustPrimary: '#1CAA81',
  disgustSecondary: '#3EBB93',
  sadPrimary: '#075D91',
  sadSecondary: '#277DA8',
  afraidPrimary: '#464FA1',
  afraidSecondary: '#626DAA'
}

ReactDOM.render(
    <ThemeProvider theme={styleGuide}>
      <App/>
    </ThemeProvider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
