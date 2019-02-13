import React, { Component } from "react";
import ItsOk from '../Components/ItsOk';

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
        <ItsOk specificEmotion={this.state.subEmotion} emotion={this.state.baseEmotion}></ItsOk>
      </div>
    );
  }
}

export default(Okay);
