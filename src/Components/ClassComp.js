import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
    // this.name = "Shiva";
    this.state = {
      name: "",
      revText: "",
    };
    this.text = "";
  }
  //this.setState
  handleChange = (event) => {
    // this.state.name = event.target.value;
    this.text = event.target.value;
  };

  handleClick = () => {
    this.text = this.text.split("").reverse().join("");
    this.setState({ revText: this.text });
  };

  render() {
    console.log(this.state.name);
    return (
      <div>
        {/* <h1>Welcome {this.state.name}</h1> */}
        <h2>This is class Component {this.state.name}</h2>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Enter the text"
        ></input>
        <button onClick={this.handleClick}>Reverse String </button>
        <h2>Reversed String is {this.state.revText}</h2>
      </div>
    );
  }
}

export default ClassComp;
/*
state - it is object which can be updated using setState method ;
setState - it update the state object and re render the component ;
*/
