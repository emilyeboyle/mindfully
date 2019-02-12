// Import dependencies from navi and react
import { createPage, createSwitch } from 'navi'

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

    // Create the about route
    '/about': createPage({
      title: "About",
      getContent: () => import('./About')
    }),
  }
})
