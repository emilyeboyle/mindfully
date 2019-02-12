import { NavLink } from 'react-navi'
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>This is the about page</h2>
        <p>This route was compiled and handled by Navi, including all the heavy lifting for SEO, creating sitemaps including this page, code-splitting, etc!</p>
        <nav><NavLink href="/">Back to the index</NavLink></nav>
      </div>
    )
  }
}

export default(About);
