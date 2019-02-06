import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

class EmotionSlider extends Component {
  render() {
    return (
      <div className="slider">
        <Slider/>
      </div>
    );
  }
}

export default EmotionSlider;
