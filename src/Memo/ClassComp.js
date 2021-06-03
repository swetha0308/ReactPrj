import React, { Component } from "react";
import ClassComp2 from "./ClassComp2";
import FunctionalComp from "./FunctionComp";
import { Consumer } from "../ContextApi/context";
class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  static contextType = Consumer;

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count });
    }, 1000);
  }
  render() {
    let value = this.context;
    console.log(value);
    return (
      <div>
        <ClassComp2 count={this.state.count}></ClassComp2>
        <FunctionalComp count={this.state.count}></FunctionalComp>
      </div>
    );
  }
}

export default ClassComp;
