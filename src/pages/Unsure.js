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
            {feelingList.map((emotion, i) => {
              console.log(emotion)
              return(<Button
                key={i}
                emotion='brand'
                absolute='false'
                show='true'
                text={emotion}>
              </Button>)
            })}
      </PageContainer>
    )
  }
}
export default(Unsure);
