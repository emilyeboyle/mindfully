import { mount, route } from 'navi';
import React from 'react';
import Emotion from './Emotion';
import SubEmotion from './SubEmotion';
import Okay from './Okay';
import Meditation from './Meditation';
import ThankYou from './ThankYou';
import Unsure from './Unsure';
import UnsureEmotions from './UnsureEmotions';
import DrawArea from './DrawArea';
import BubblePop from './BubblePop';
import MusicActivity from '../MusicActivity/MusicActivity'; import LevelSelection from './LevelSelection';

const routes =
  mount({
    // Create the index route
    '/': route({
      title: "Level Selection",
      view: <LevelSelection />,
    }),

    // Create the main emotion route
    '/:level': route(async req =>{
      let {level} = req.params
      return {
      view: <Emotion level={level}/>,
      }
    }),

    // Create the emotion route
    '/:level/:emotion': route(async req =>{
      let {emotion, level} = req.params
      return {
        view: <SubEmotion baseEmotion={emotion} level={level}/>,
      }
    }),

    // Create the itsok route
    '/:level/:emotion/:subemotion/itsOkay': route(async req=>{
      let {emotion, subemotion, level} = req.params
      return{
      view: <Okay level={level}  baseEmotion={emotion} subEmotion={subemotion}/>,
      }
    }),

    // Create the meditation route
    '/breathing': route({
      title: "Calm Breathing",
      view: <Meditation />,
    }),

    // Create the thank you route
    '/thankYou': route({
      title: "Thank You",
      view: <ThankYou />,
    }),

    // Create the unsure route
    '/:level/unsure': route(async req =>{
      let {level} = req.params
      return {
        view: <Unsure  level={level}/>,
      }
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
    }),
    '/unsure/:emotions': route(async req=>{
      let {emotions} = req.params;
      return {
        title: "Unsure Emotions",
        view: <UnsureEmotions emotions={emotions}/>,
      }
    })
  });
export default routes
