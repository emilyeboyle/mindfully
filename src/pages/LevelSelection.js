import React, { Component } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-navi';
import Button from "../Components/Button";

const SelectContainer = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyledLabel = styled.label`
  font-family: 'Poppins';
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const StyledSelect = styled.select`
  font-family: 'Poppins';
  font-size: 1rem;
  border: 1px solid;
  border-color: ${props => props.theme.brandPrimary};
  width: 15rem;
  padding: 0.5rem;
  outline: 0;
  background-image:
   linear-gradient(45deg, transparent 50%, gray 50%),
   linear-gradient(135deg, gray 50%, transparent 50%),
   linear-gradient(to right, #ccc, #ccc);
 background-position:
   calc(100% - 20px) calc(1em + 2px),
   calc(100% - 15px) calc(1em + 2px),
   calc(100% - 2.5em) 0.5em;
 background-size:
   5px 5px,
   5px 5px,
   1px 1.5em;
 background-repeat: no-repeat;
`

const StyledOption = styled.option`
  font-family: 'Poppins';
  font-size: 1rem;
`

class LevelSelection extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      level: "0"
    };
  }

  handleSelect(event) {
    this.setState({level: event.target.value});
  }

  render() {
    console.log(this.state.level);
    return (
      <SelectContainer>
        <StyledLabel>Please select your students' grade level:</StyledLabel>
        <StyledSelect value={this.state.level} onChange={this.handleSelect}>
          <StyledOption value="0">Grade Level</StyledOption>
          <StyledOption value="1">K–1</StyledOption>
          <StyledOption value="2">2–3</StyledOption>
          <StyledOption value="3">4–5</StyledOption>
        </StyledSelect>
        <NavLink href="/">
          <Button show={true} text='Continue'></Button>
        </NavLink>
      </SelectContainer>
    );
  }
}

export default (LevelSelection);
