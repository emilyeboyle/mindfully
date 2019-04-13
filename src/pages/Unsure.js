import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import ButtonUnsure from '../Components/ButtonUnsure'
import UnsureEmotionList from '../constants/UnsureEmotionList';
import { NavLink } from 'react-navi'
import BackButton from '../Components/BackButton';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; width: 80%; margin: 0 auto; justify-content: center;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 2rem auto;
  text-align: center;
`

class Unsure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmotions : [],
      determinedEmotions:[],
    }
    this.determineEmotion = this.determineEmotion.bind(this);
    this.setEmotion = this.setEmotion.bind(this);
    this.removeEmotion = this.removeEmotion.bind(this);
  }

  setEmotion(emotion) {
    this.setState(prevState => ({
      selectedEmotions: [...prevState.selectedEmotions, emotion]
    }),() => {
      this.determineEmotion();
    });
  }

  removeEmotion(emotion) {
    const index = this.state.selectedEmotions.indexOf(emotion);
    this.setState(prevState => ({
      selectedEmotions : this.state.selectedEmotions.filter((_, i) => i !== index)
    }),() => {
    });
  }

  determineEmotion() {
    if (this.state.selectedEmotions.includes("Heart pounding")) {
      if( this.state.selectedEmotions.includes("Upset stomach")) {
        this.setState({
          determinedEmotions: ['disgusted', 'afraid']
        });
      } else if (this.state.selectedEmotions.includes("Shaking") || this.state.selectedEmotions.includes("High energy")) {
        this.setState({
          determinedEmotions: ['joyful', 'afraid'],
        });
      } else if (this.state.selectedEmotions.includes("Tense") || this.state.selectedEmotions.includes("Weak") || this.state.selectedEmotions.includes("Hot") || this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['angry', 'afraid'],
        });
      }
    } else if (this.state.selectedEmotions.includes("Relaxed")) {
      if(this.state.selectedEmotions.includes("Upset stomach")) {
        this.setState({
          determinedEmotions: ['angry', 'afraid'],
        });
      } else if ( this.state.selectedEmotions.includes("Shaking")) {
        this.setState({
          determinedEmotions: ['sad', 'afraid'],
        });
      } else if (this.state.selectedEmotions.includes("Weak") || this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['sad', 'joyful'],
        });
      } else if (this.state.selectedEmotions.includes("Hot")) {
        this.setState({
          determinedEmotions: ['angry', 'joyful'],
        });
      }
    } else if (this.state.selectedEmotions.includes("Upset stomach")) {
      if(this.state.selectedEmotions.includes("Shaking") || this.state.selectedEmotions.includes("Weak") || this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['sad', 'afraid'],
        });
      } else if (this.state.selectedEmotions.includes("Tense")) {
        this.setState({
          determinedEmotions: ['afraid', 'angry']
        });
      } else if (this.state.selectedEmotions.includes("Hot")) {
        this.setState({
          determinedEmotions: ['afraid', 'disgusted']
        });
      } else if (this.state.selectedEmotions.includes("High energy")) {
        this.setState({
          determinedEmotions: ['afraid', 'joyful']
        });
      }
    } else if (this.state.selectedEmotions.includes("Shaking")) {
      if(this.state.selectedEmotions.includes("Tense")) {
        this.setState({
          determinedEmotions: ['disgusted', 'afraid']
        });
      } else if (this.state.selectedEmotions.includes("Weak") || this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['sad', 'afraid']
        });
      } else if (this.state.selectedEmotions.includes("Hot")) {
        this.setState({
          determinedEmotions: ['afraid', 'angry']
        });
      } else if (this.state.selectedEmotions.includes("High energy")) {
        this.setState({
          determinedEmotions: ['afraid', 'joyful']
        });
      }
    } else if (this.state.selectedEmotions.includes("Tense")) {
      if(this.state.selectedEmotions.includes("Weak")) {
        this.setState({
          determinedEmotions: ['sad', 'angry']
        }); } else if (this.state.selectedEmotions.includes("Hot")) {
        this.setState({
          determinedEmotions: ['angry', 'disgusted']
        });
      } else if (this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['afraid', 'sad']
        });
      } else if (this.state.selectedEmotions.includes("High energy")) {
        this.setState({
          determinedEmotions: ['afraid', 'angry']
        });
      }
    } else if (this.state.selectedEmotions.includes("Weak")) {
      if(this.state.selectedEmotions.includes("Hot")) {
        this.setState({
          determinedEmotions: ['afraid', 'angry']
        });
      } else if (this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['afraid', 'sad']
        });
      }
    } else if (this.state.selectedEmotions.includes("Hot")) {
      if(this.state.selectedEmotions.includes("Tired")) {
        this.setState({
          determinedEmotions: ['afraid', 'sad']
        });
      } else if (this.state.selectedEmotions.includes("High energy")) {
        this.setState({
          determinedEmotions: ['afraid', 'joyful']
        });
      }
    }
  }

  render() {
    let feelingList = UnsureEmotionList['feelings'];
    const emotion1 = this.state.determinedEmotions[0];
    const emotion2 = this.state.determinedEmotions[1];
    return(
      <div>
          <nav>
            <NavLink href={'/'}>
              <BackButton emotion='brand'/>
            </NavLink>
          </nav>
        <StyledH2>How does your body feel?</StyledH2>
        <Container>
          {feelingList.map((emotion, i) => {
            return(<ButtonUnsure
              key={i}
              text={emotion}
              absolute={false}
              disallowSelection={this.state.selectedEmotions.length >= 2}
              unsure={true}
              setEmotion={this.setEmotion}
              removeEmotion={this.removeEmotion}
              determineEmotion={this.determineEmotion}>
            </ButtonUnsure>)
          })}
        </Container>
          <nav>
            <NavLink href={`/unsure/${emotion1}+${emotion2}`}>
              <Button greyed={this.state.selectedEmotions.length < 2}  emotion="brand" text='Continue'></Button>
            </NavLink>
          </nav>
      </div>
    )
  }
}
export default(Unsure);
