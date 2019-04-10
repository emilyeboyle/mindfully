import React, { Component } from "react";
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import styled from 'styled-components';

const StyledMarker = styled.p`
  font-family: 'Poppins';
  font-size: 20px;
`

class EmotionSlider extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      value: null,
    };
  }

  log(val) {
    this.setState({
      value: val,
    });
    this.props.value(this.state.value);
  }

  updateValue() {
    this.props.value(this.state.value);
  }

  render() {
    return (
      <div className="slider">
        <StyledMarker> A little </StyledMarker>
        <Slider className={this.props.emotion} onChange={this.log} />
        <StyledMarker> A lot </StyledMarker>
      </div>
    );
  }
}

EmotionSlider.propTypes = {
  emotion: PropTypes.string.isRequired
}

export default EmotionSlider;
