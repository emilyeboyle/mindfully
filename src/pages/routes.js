import { mount, route } from 'navi'
import React from 'react';
import Emotion from './Emotion'
import SubEmotion from './SubEmotion'
import Okay from './Okay'
import Unsure from './Unsure'

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
    
    // Create the unsure route
    '/unsure': route({
      title: "Unsure",
      view: <Unsure />,
    }),
  })

export default routes
