import React, { Component } from 'react';
import Button from '../Components/Button';
import PageContainer from '../Components/PageContainer';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
class Unsure extends Component {

  render() {
    return(
      <PageContainer baseEmotion='brandPrimary'>
          <ButtonContainer>
            <Button show='true' emotion='brand' text='Continue'></Button>
          </ButtonContainer>
      </PageContainer>
    )
  }
}
export default(Unsure);
