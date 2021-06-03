import React from "react";

class ClassA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Aditya",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h2>Name is {this.state.name}</h2>
        <input type="text" onChange={this.handleChange}></input>
      </div>
    );
  }
}
export default ClassA;
