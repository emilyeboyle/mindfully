import React, { Component } from "react";
import ItsOk from '../Components/ItsOk';
import PageContainer from '../Components/PageContainer';

class Okay extends Component {
  constructor(props) {
    super(props);
    //console.log(navigation);
    this.state = {
      level: 'level2',
      baseEmotion: 'afraid',
      subEmotion:'nervous',
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
      </div>
    );
  }
}

export default(Okay);
