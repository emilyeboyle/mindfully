import React, { Component } from "react";
import ItsOk from '../Components/ItsOk';
import PageContainer from '../Components/PageContainer';
import { NavLink } from 'react-navi';
import Button from '../Components/Button';
import BackButton from '../Components/BackButton';
import ActivityList from '../constants/ActivityList';

class Okay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: props.level,
      baseEmotion: this.props.baseEmotion,
      subEmotion: this.props.subEmotion,
      selected : false,
      message : '',
      activity: '',
    };
    this.setActivity = this.setActivity.bind(this);
  }

 componentDidMount() {
   this.setActivity();
 }

  setActivity() {
      const list = ActivityList['activities'];
    if(this.state.subEmotion) {
      const activities = list[this.state.subEmotion];
      const activitiesLength= activities.length;
      const random = Math.floor(Math.random() * activitiesLength);
      const randomActivity = activities[random];
       this.setState({activity: randomActivity});
    } else {
      const activities = list[this.state.baseEmotion];
      const activitiesLength= activities.length;
      const random = Math.floor(Math.random() * activitiesLength);
      const randomActivity = activities[random];
       this.setState({activity: randomActivity});
    }
  }

  render() {
    return (
      <div>
        <nav>
        {this.state.baseEmotion !== this.state.subEmotion && this.state.subEmotion !== 'unsure' &&
          <NavLink href={`/${this.state.level}/${this.state.baseEmotion}`}>
            <BackButton emotion={this.state.baseEmotion}/>
          </NavLink>
        }
        </nav>
        <PageContainer baseEmotion={this.state.baseEmotion}>
          <ItsOk
            activity={this.state.activity}
            specificEmotion={this.state.subEmotion}
            emotion={this.state.baseEmotion}
          />
        </PageContainer>
        <nav>
          <NavLink href={`/${this.state.activity}`}>
            <Button text='Continue' emotion={this.state.baseEmotion} show={true}/>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default(Okay);
