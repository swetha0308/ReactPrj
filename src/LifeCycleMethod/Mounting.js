import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    console.log("----constructor-----------------");
    this.state = {
      count: 3,
    };
  }

  componentDidMount() {
    console.log("------componentDidMount-----");
  }

 
  // static getDerivedStateFromProps(props, state) {
  //   //used when u want to update state depending on props received
  //   console.log(
  //     "-----static getDerivedStateFrom Props=----------------------- "
  //   );
  //   console.log(props, state);
  //   if (props.count % 3 == 0) {
  //     return { count: state.count + 1 };
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    console.log("redenring mounting comp");
    return (
      <div>
        Life Cycle Methods
        <h2>Count in Mounting Component is {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Mount++
        </button>
      </div>
    );
  }
}

export default Mounting;
