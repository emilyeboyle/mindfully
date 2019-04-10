import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../Components/Button';
import BunnyBody from '../Components/BunnyBody';
import { NavLink } from 'react-navi';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 85%;
  height: 75vh;
`
const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 2rem 0;
`

class UnsureEmotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmotion : 'angry',
    }
  };

  render() {
    return (
      <StyledContainer>
        <StyledHeader>Are you feeling either of these emotions?!</StyledHeader>
        <BunnyBody emotion="brand"/>
        <NavLink href={`/${this.state.selectedEmotion}`}>
          <Button text='Next' emotion="brand" show={true}/>
        </NavLink>
      </StyledContainer>
    );
  }
}

export default (UnsureEmotions);
