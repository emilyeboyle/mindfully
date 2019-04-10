import React, { Component } from "react";
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`
const StyledMarker = styled.p`
  font-family: 'Poppins';
  font-size: 20px;
  margin: 0 0 0.75rem;
`
const MarkerContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <SliderContainer>
        <MarkerContainer>
          <StyledMarker>A little</StyledMarker>
          <StyledMarker>A lot</StyledMarker>
        </MarkerContainer>
        <Slider className={this.props.emotion} onChange={this.log} />
      </SliderContainer>
    );
  }
}

EmotionSlider.propTypes = {
  emotion: PropTypes.string.isRequired
}

export default EmotionSlider;
