import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

function log(value) {
  console.log(value);
}

class EmotionSlider extends Component {
  render() {
    return (
      <div className="slider">
        <Slider className={this.props.emotion} onChange={log} />
      </div>
    );
  }
}

EmotionSlider.propTypes = {
  emotion: PropTypes.string.isRequired
}

export default EmotionSlider;
