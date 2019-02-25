import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../Components/Button';
import BunnyBody from '../Components/BunnyBody';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 85%;
`
const StyledHeader = styled.h1`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 2rem 0;
`
const StyledText = styled.p`
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.5rem;
`

class ThankYou extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader>Thank you for taking this time for yourself!</StyledHeader>
        <BunnyBody emotion="brand"/>
        <StyledText>Please take a moment to reflect on how you feel.</StyledText>
        <Button text='Finish' emotion="brand" show={true}/>
      </StyledContainer>
    );
  }
}

export default (ThankYou);
