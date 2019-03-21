import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components'


const StyledLink = styled.p`
  display: ${(props) => props.show ? "block" : "none"};
  background: ${props => props.selected ? "#E55C7D" : "#C7C7C7"};
  text-align: center;
  margin: 1rem 1rem;
  border-radius: 38.5px;
  padding: 14px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
  font-family: 'Poppins';
  font-size: 20px;
  width: 200px;
  cursor: pointer;
  z-index: 1;
`

class ButtonUnsure extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected : false,
    };
  }
  handleClick() {
    this.setState({selected : !this.state.selected})
  }
  render() {
    const emotion = this.props.emotion;
    const emotionString = (emotion + 'Primary').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];
    return(
      <StyledLink color={themeColor} emotion={this.props.selectedEmotion} show={this.props.show} selected={this.state.selected} onClick={this.handleClick}>
          {this.props.text}
      </StyledLink>
    );
  }
}

ButtonUnsure.defaultProps = {
  emotion: 'brand',
  show: 'true'
}

export default withTheme(ButtonUnsure);
