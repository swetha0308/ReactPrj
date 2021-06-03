import React, { PureComponent } from "react";
import UpdateFunction from './UpdateFunction';
class HoverComp extends PureComponent {
  
  render() {
    return <h2 onMouseOver={this.props.handleClick}>Count is {this.props.state.count}</h2>;
  }
}

export default UpdateFunction(HoverComp);
