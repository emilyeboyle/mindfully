import React, { Component } from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { NavLink } from 'react-navi';
import Button from '../Components/Button';
import WelcomeVideo from '../static/images/Welcome.mp4';

const fadeIn = keyframes`
  0% { opacity: 0 }
  66% { opacity: 0 }
  100% { opacity: 1 }
`

const StyledHeader = styled.h1`
  color: ${props => props.theme.brandPrimary};
  font-family: 'Poppins';
  font-size: 3.25rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 2rem 0;
  text-align: center;
  animation: ${fadeIn} 6s ease-in;
`
const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonContainer = styled.div`
  animation: ${fadeIn} 7.5s ease-in;
`

class Welcome extends Component {
  render() {
    return (
      <div>
        <VideoContainer>
          <video autoPlay style={{width: '65vw'}}>
            <source src={WelcomeVideo}/>
          </video>
        </VideoContainer>
        <StyledHeader>Welcome to Mindfully</StyledHeader>
        <ButtonContainer>
          <NavLink href='/'>
            <Button show={true} text='Enter'></Button>
          </NavLink>
        </ButtonContainer>
      </div>
    );
  }
}

export default (Welcome);
