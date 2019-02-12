import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import './styles/bunnyBodyStyles.scss'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';
import { createBrowserNavigation } from 'navi'
import pages from './pages'

const styleGuide = {
  background: '#F5F6F6',
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

async function main() {
  let navigation = createBrowserNavigation({ pages })

  // Wait until async content is ready.
  await navigation.steady()

  ReactDOM.render(
    <ThemeProvider theme={styleGuide}>
      <App navigation={navigation}/>
    </ThemeProvider>,document.getElementById('root')
  );
}

//Start the app
main()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
