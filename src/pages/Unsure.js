import React, { Component } from 'react';
import Button from '../Components/Button';
import PageContainer from '../Components/PageContainer';
import styled from 'styled-components';
import UnsureEmotionList from '../constants/UnsureEmotionList';

class Unsure extends Component {

  render() {
    let feelingList = UnsureEmotionList['feelings'];
    console.log(feelingList);
    return(
      <PageContainer baseEmotion='brandPrimary'>
        {/*So, here we write the map function on the feelingList. 
           The (emotion,i)=> syntax is just indicating that we are making
           a new function with the inputs emotion and i. So, for each item
            in feelingList we want to return (or create) a Button. The key prop
            is just something you have to have when you are writing a map.
            The main thing we need to  worry about is setting the text={emotion}. 
            This will make the button's  text say the emotion that is in the file. 
            We are getting that emotion from the function's input, which is coming from the file.*/}
        {feelingList.map((emotion, i) => {
          return(<Button
            key={i}
            text={emotion}>
          </Button>)
        })}
      </PageContainer>
    )
  }
}
export default(Unsure);
