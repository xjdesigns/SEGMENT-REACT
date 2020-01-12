import React, { Component } from 'react';
export class Worker extends Component {
  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Yeah Buddy"), React.createElement("div", null, "Woot woot more"));
  }

}
export default Worker;