import { mount, route } from 'navi';
import React from 'react';
import Emotion from './Emotion';
import SubEmotion from './SubEmotion';
import Okay from './Okay';
import Meditation from './Meditation';
import ThankYou from './ThankYou';
import Unsure from './Unsure';
import DrawArea from './DrawArea';
import BubblePop from './BubblePop';
import MusicActivity from '../MusicActivity/MusicActivity';

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

    // Create the meditation route
    '/meditation': route({
      title: "Calm Breathing",
      view: <Meditation />,
    }),

    // Create the thank you route
    '/thankYou': route({
      title: "Thank You",
      view: <ThankYou />,
    }),

    // Create the unsure route
    '/unsure': route({
      title: "Unsure",
      view: <Unsure />,
    }),

    // Create the draw route
    '/draw': route({
      title: "Draw",
      view: <DrawArea />,
    }),
    // Create the bubblepop route
    '/bubblepop': route({
      title: "Bubble Pop",
      view: <BubblePop/>,
    }),
    '/music': route({
      title: "Music Maker",
      view: <MusicActivity />,
    })
  });

export default routes
