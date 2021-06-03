import React, { PureComponent } from "react";
import UpdateFunction from "./UpdateFunction";
class ClickCounter extends PureComponent {
  render() {
    return (
      <div>
        <h2>Count is {this.props.state.count}</h2>
        <button onClick={this.props.handleClick}>InCrement</button>
      </div>
    );
  }
}
export default UpdateFunction(ClickCounter);
