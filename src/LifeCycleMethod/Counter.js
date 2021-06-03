import React, { PureComponent } from "react";
import Mounting from "./Mounting";
import Updating from "./Updating";
class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      flag:true
    };
  }

  handleCounter = () => {
    this.setState({ count:1});
  };

  unMountComp=()=>{
     this.setState({
         flag:!this.state.flag,
     })
  }
  render() {
      console.log("re rending counter comp")
    return (
      <React.Fragment>
        {/* <Mounting count={this.state.count}></Mounting> */}
        <div>
          <h2> Count in Counter is {this.state.count}</h2>
          <button onClick={this.handleCounter}> Count ++</button>
        </div>
        {/* passing count as props to updating comp */}
        {
          //(condition)?(true):(false)
        }
        {this.state.flag ? (
          <Updating count1={this.state.count}></Updating>
        ) : null}
        <button onClick={this.unMountComp}>
          {this.state.flag ? "UnMount" : "Mount"}
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
