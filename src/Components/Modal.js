import React, { Component } from "react";
import styled from 'styled-components';
import Button from './Button';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: ${props => props.show ? "block" : "none"}
  z-index: 1;
`
const ModalMain = styled.div`
  width: 50vw;
  margin: 12rem auto 0;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
`
const StyledText = styled.p`
  font-family: Poppins;
  font-size: 1.5rem;
  margin: 0;
`
const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`

class Modal extends Component {
  render() {
    return (
      <ModalContainer
        show={this.props.open}
      >
        <ModalMain>
          <StyledText>{this.props.text}</StyledText>
          <ButtonContainer>
            <Button
              text="Okay"
              absolute={false}
              emotion="brand"
              handleClick={this.props.handleClose}
              clickFunction={true}
            />
          </ButtonContainer>
        </ModalMain>
      </ModalContainer>
    );
  }
}

export default (Modal);
