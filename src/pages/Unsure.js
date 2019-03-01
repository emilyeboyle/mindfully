import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import UnsureEmotionList from '../constants/UnsureEmotionList';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 2rem auto;
  text-align: center;
`

class Unsure extends Component {
  render() {
    let feelingList = UnsureEmotionList['feelings'];
    console.log(feelingList);
    return(
      <div>
        {/*So, here we write the map function on the feelingList.
           The (emotion,i)=> syntax is just indicating that we are making
           a new function with the inputs emotion and i. So, for each item
            in feelingList we want to return (or create) a Button. The key prop
            is just something you have to have when you are writing a map.
            The main thing we need to  worry about is setting the text={emotion}.
            This will make the button's  text say the emotion that is in the file.
            We are getting that emotion from the function's input, which is coming from the file.*/}
        <StyledH2>How does your body feel?</StyledH2>
        <Container>
          {feelingList.map((emotion, i) => {
            return(<Button
              key={i}
              text={emotion}
              absolute={false}
              unsure={true}>
            </Button>)
          })}
        </Container>
        <Button text='Continue'></Button>
      </div>
    )
  }
}
export default(Unsure);
