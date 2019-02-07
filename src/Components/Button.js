import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: black;
  background-color: ${props => props.theme.brandPrimary};
  border-radius: 38.5px;
  padding: 14px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
  font-family: 'Poppins';
  font-size: 20px;
  width: 130px;
`

class Button extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <StyledLink>
        {this.props.text}
      </StyledLink>
    );
  }
}

Button.propTypes = {
  emotion: PropTypes.oneOf(['angry', 'joyful', 'sad', 'disgust', 'afraid'])
}

export default Button;
