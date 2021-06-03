import React, { PureComponent } from "react";
import Child from "./Child";
class Parent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <Child IncFunc={this.Increment}></Child>
        <h2>Count is {this.state.count}</h2>
      </div>
    );
  }
}

export default Parent;
