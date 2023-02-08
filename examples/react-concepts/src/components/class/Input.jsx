import React, { Component } from "react";

class Input extends Component {
  constructor() {}
  //state = "default";

  /*function handleChange(event) {
    console.log(event.target.value);
    //setState(event.target.value);
    //console.log("state", state);
  }*/

  render() {
    return <input value={this.state} type="text" onChange={handleChange} />;
  }
}

export default Input;
