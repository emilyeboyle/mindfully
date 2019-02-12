import React, { Component } from "react";
import PropTypes from 'prop-types';
import Slider from 'rc-slider';


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
  }

  updateValue() {
    this.props.value(this.state.value);
  }

  render() {
    return (
      <div className="slider">
        <Slider className={this.props.emotion} onChange={this.log} onAfterChange={this.updateValue}/>
      </div>
    );
  }
}

//EmotionSlider.propTypes = {
  //emotion: PropTypes.string.isRequired
//}

export default EmotionSlider;
