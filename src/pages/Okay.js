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
    //console.log(navigation);
    this.state = {
      level: 'level2',
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
      console.log(randomActivity);
       this.setState({activity: randomActivity});
    } else {
      const activities = list[this.state.baseEmotion];
      const activitiesLength= activities.length;
      const random = Math.floor(Math.random() * activitiesLength);
      const randomActivity = activities[random];
      console.log(randomActivity);
       this.setState({activity: randomActivity});
    }
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink href={`/${this.state.baseEmotion}`}>
            <BackButton emotion={this.state.baseEmotion}/>
          </NavLink>
        </nav>
        <PageContainer baseEmotion={this.state.baseEmotion}>
          <ItsOk activity={this.state.activity} specificEmotion={this.state.subEmotion} emotion={this.state.baseEmotion}></ItsOk>
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
