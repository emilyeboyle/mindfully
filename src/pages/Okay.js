import React, { Component } from "react";
import ItsOk from '../Components/ItsOk';
import PageContainer from '../Components/PageContainer';
import { NavLink } from 'react-navi';
import Button from '../Components/Button';

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
    };
  }

  render() {
    return (
      <div>
        <PageContainer baseEmotion={this.state.baseEmotion}>
          <ItsOk specificEmotion={this.state.subEmotion} emotion={this.state.baseEmotion}></ItsOk>
        </PageContainer>
        <nav>
          <NavLink href={'/meditation'}>
            <Button text='Continue' emotion={this.state.baseEmotion} show={true}/>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default(Okay);
