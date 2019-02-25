import React, { Component } from 'react';
import Button from '../Components/Button';
import PageContainer from '../Components/PageContainer';
import styled from 'styled-components';
import UnsureEmotionList from '../constants/UnsureEmotionList';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
class Unsure extends Component {

  render() {
    let feelingList = UnsureEmotionList['feelings'];
    console.log(feelingList);
    return(
      //What we need to do here is write a function that creates a button for each of the emotions in the unsureEmotionList.
      //The function map applies whatever function you want to each of the items in a list.
      //So, we need to write that function that creates a button. Then we can use map to apply that to every item in the list.
      //We are doing the same thing with bubbles in the SubEmotion.js file, lines 105-121.
 
      //To be more specific, here are your steps:
      //STEP 1: Add all of the unsure feelings to the UnsureEmotionList in the constants folder.
      //STEP 2: Get the list of feelings from the UnsureEmotionList (I have helped you with this one above).
      //STEP 3: Write a map function over this list that creates a button
      //STEP 4: Pass the feeling down to the button as a prop (which is just a property on a component, such as emotion="sad")
      <PageContainer baseEmotion='brandPrimary'>
          <ButtonContainer>
            //WRITE THE MAP HERE!!
            <Button show='true' emotion='brand' text='Continue'></Button>
          </ButtonContainer>
      </PageContainer>
    )
  }
}
export default(Unsure);
