import React, { PureComponent } from "react";
import UpdateFunction from './UpdateFunction'
class Counter extends PureComponent {
 

  render() {
      console.log(this.props)
    return (
      <div>
          <h2>Hello Counter</h2>
        <h2>onClick Count is {this.props.state.count}</h2>
        <button onClick={this.props.IncrementCounter}>Count++</button>
      </div>
    );
  }
}

export default UpdateFunction(Counter);
