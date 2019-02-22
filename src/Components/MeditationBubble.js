import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme, keyframes } from 'styled-components';

const grow = keyframes`
  0% { transform: scale(1.0); }
  5% { transform: scale(1.0); }
  33% { transform: scale(1.5); }
  66% { transform: scale(1.5); }
  95% { transform: scale(1.0); }
  100% { transform: scale(1.0); }
`
const replaceWords = keyframes`
  0% { opacity: 0; }
  5% { opacity: 1; }
  28% { opacity: 1; }
	33% { opacity: 0; }
  100% { opacity: 0; }
`
const blob = keyframes`
  0%, 100% { border-radius: 63% 37% 54% 46% / 55% 43% 52% 45%; }
  15% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
  30% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
  45% { border-radius: 61% 39% 51% 45% / 61% 38% 62% 39%; }
  60% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
  72% { border-radius: 50% 50% 34% 66% / 56% 60% 32% 44%; }
  85% { border-radius: 46% 54% 50% 43% / 35% 61% 39% 65%; }
`
const blob2 = keyframes`
  0%, 100% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
  10% { border-radius: 61% 42% 55% 45% / 61% 38% 62% 39%; }
  20% { border-radius: 50% 50% 34% 66% / 56% 65% 32% 44%; }
  34% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
  46% { border-radius: 46% 54% 53% 50% / 35% 61% 39% 65%; }
  58% { border-radius: 40% 60% 54% 46% / 49% 47% 40% 51%; }
  77% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  90% { border-radius: 54% 46% 38% 62% / 49% 70% 32% 51%; }
`
const blob3 = keyframes`
  0%, 100% { border-radius: 46% 74% 50% 50% / 35% 61% 39% 65%; }
  6% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
  13% { border-radius: 61% 39% 67% 33% / 70% 52% 50% 30%; }
  24% { border-radius: 61% 44% 55% 45% / 61% 38% 62% 39%; }
  32% { border-radius: 54% 46% 39% 62% / 49% 70% 30% 51%; }
  47% { border-radius: 40% 60% 54% 46% / 49% 62% 40% 51%; }
  65% { border-radius: 58% 50% 34% 66% / 56% 68% 32% 44%; }
  88% { border-radius: 61% 39% 67% 33% / 70% 50% 57% 30%; }
`
const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const StyledBubble = styled.div`
  background: ${props => props.theme.brandPrimary};
  opacity: 0.75;
  width: 20rem;
  height: 20rem;
  border-radius: 63% 37% 54% 46% / 55% 43% 52% 45%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${grow} 9s linear 1, ${blob} 27s ease-in-out 0.25;
`
const TransparentStyledBubble = styled.div`
  background: ${props => props.theme.brandPrimary};
  opacity: ${props => props.opacity};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  position: absolute;

  &.first {
    animation: ${grow} 9s linear 1, ${blob2} 18s ease-in-out alternate 0.5;
  }

  &.second {
    animation: ${grow} 9s linear 1, ${blob3} 18s ease-in-out alternate 0.5;
  }
`
const StyledText = styled.span`
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 1.25rem;
  position: absolute;
  animation: ${replaceWords} 9s ease-in 1;
  opacity: 0;

  &:nth-child(2) {
    animation-delay: 3s;
  }

  &:nth-child(3) {
    animation-delay: 6s;
  }
`

class MeditationBubble extends Component {
  render() {
    return (
      <BubbleContainer>
        <TransparentStyledBubble opacity="0.5" size="21rem" className="first"/>
        <TransparentStyledBubble opacity="0.3" size="21.5rem" className="second"/>
        <StyledBubble
          onAnimationEnd={() => console.log("done")}
        >
          <StyledText>Breathe In</StyledText>
          <StyledText>Hold</StyledText>
          <StyledText>Breathe Out</StyledText>
        </StyledBubble>
      </BubbleContainer>
    );
  }

}

export default withTheme(MeditationBubble);
