import React, { Component } from "react";
import styled from 'styled-components';
import { withTheme } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  background: ${props => props.color};
  height: 100vh;
  margin-top: -1rem;
  /*margin-top because there is currently a <p> element causing a gap at the top of the screen*/
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
