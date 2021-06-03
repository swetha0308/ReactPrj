import React from "react";

const UpdateFunction = (CounterComponent) => {
  return class UpdatedComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    IncrementCounter = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    };

    render(){
        return (
            <CounterComponent state={this.state} IncrementCounter={this.IncrementCounter}></CounterComponent>
        )
    }
  };
};

export default UpdateFunction