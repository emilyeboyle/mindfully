import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme, keyframes } from 'styled-components';

const grow = keyframes`
  0% { transform: scale(1.0); }
  10% { transform: scale(1.0); }
  40% { transform: scale(1.5); }
  70% { transform: scale(1.5); }
  100% { transform: scale(1.0); }
`
const replaceWords = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  27% { opacity: 1; }
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
const progress = keyframes`
  0% { width: 0; }
`
const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
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

  &.animate {
    animation: ${grow} 10s linear 6, ${blob} 30s ease-in-out 2;
  }
`
const TransparentStyledBubble = styled.div`
  background: ${props => props.theme.brandPrimary};
  opacity: ${props => props.opacity};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  position: absolute;

  &.first {
    animation: ${grow} 10s linear 6, ${blob2} 20s ease-in-out alternate 3;
  }

  &.second {
    animation: ${grow} 10s linear 6, ${blob3} 20s ease-in-out alternate 3;
  }
`
const StyledText = styled.span`
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 1.25rem;
  position: absolute;
  opacity: 0;

  &.animate {
    animation: ${replaceWords} 10s ease-in 6;
  }

  &:nth-child(1) {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 4s;
  }

  &:nth-child(3) {
    animation-delay: 7s;
  }
`
const ProgressBar = styled.div`
  width: 42rem;
  height: 1rem;
  border-radius: 15px;
  border: 1px solid;
  border-color: ${props => props.theme.brandPrimary};
  margin: 0 auto;
`
const ProgressBarFill = styled.span`
  width: 42rem;
  height: 100%;
  border-radius: 15px;
  background: ${props => props.theme.brandPrimary};
  position: relative;
  display: block;
  animation: ${progress} 60s linear;
`

class MeditationBubble extends Component {
  render() {
    return (
      <div>
        <BubbleContainer>
          <TransparentStyledBubble opacity="0.5" size="21rem" className={this.props.animate ? "first" : ""}/>
          <TransparentStyledBubble opacity="0.3" size="21.5rem" className={this.props.animate ? "second" : ""}/>
          <StyledBubble
            className={this.props.animate ? "animate" : ""}
            onAnimationEnd={(evt) => {this.props.handleAnimation(evt)}}
          >
            <StyledText className={this.props.animate ? "animate" : ""}>Breathe In</StyledText>
            <StyledText className={this.props.animate ? "animate" : ""}>Hold</StyledText>
            <StyledText className={this.props.animate ? "animate" : ""}>
              Breathe Out
            </StyledText>
          </StyledBubble>
        </BubbleContainer>
        <ProgressBar>
          <ProgressBarFill/>
        </ProgressBar>
      </div>
    );
  }

}

export default withTheme(MeditationBubble);
