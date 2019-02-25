import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.color};
  height: 100vh;
`

class PageContainer extends Component {
  render() {
    const baseEmotion = this.props.baseEmotion;
    const emotionString = (baseEmotion + 'Background').toString();
    const theme = this.props.theme;
    const themeColor = theme[emotionString];


    return (
      <StyledContainer color={themeColor}>
        {this.props.children}
      </StyledContainer>
    );
  }
}

export default withTheme(PageContainer);
