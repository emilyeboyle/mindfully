import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class EmotionSlider extends Component {
  render() {
    return (
      <Slider/>
    );
  }
}

export default Slider;
