// Import dependencies from navi and react
import { createPage, createSwitch } from 'navi'
import * as Navi from 'navi'

// Create the switch
export default createSwitch({
  paths: {
    // Create the index route
    '/': createPage({
      title: "Emotion",
      getContent: () => import('./Emotion')
    }),

    // Create the emotion route
    '/:emotion': createPage({
      title: "SubEmotion",
      getContent: () => import('./SubEmotion')
    }),

    // Create the itsok route
    '/:emotion/:subemotion/itsOkay': createPage({
      title: "It's Okay",
      getContent: () => import('./Okay')
    }),

    // Create the meditation route
    '/meditation': createPage({ title: "Calm Breathing",
      getContent: () => import('./Meditation')
    }),

    // Create the thank you route
    '/thankYou': createPage({
      title: "Thank You",
      getContent: () => import('./ThankYou')
    }),

    // Create the unsure route
    '/unsure': createPage({
      title: "Unsure",
      getContent: () => import('./Unsure')
    }),

    // Create the unsure route
    '/draw': route({
      title: "Draw",
      view: <DrawArea />,
    }),
  }
})
