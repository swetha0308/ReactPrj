import React, { PureComponent } from "react";

class Updating extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count2: 1,
    };
  }

  handleClick = () => {
    this.setState({
      count2: this.state.count2 + 1,
    });
  };

  // shouldComponentUpdate(props,state){
  //     //it compares props and state and returns true or false depending on condition applied
  //     //return true - render
  //     //return false - do not render
  //     console.log(props,state);
  //     if(props.count1==state.count2){
  //         return false;
  //     }
  //     return true;
  // }

  componentDidUpdate() {
    console.log("----Updated----");
  }
  componentWillUnmount() {
    console.log("----UnMounted ----");
  }
  render() {
    console.log("--re rendering update comp ");
    return (
      <div>
        <h2>Count2 in Updating {this.state.count2}</h2>
        <button onClick={this.handleClick}>Increment Count2</button>
      </div>
    );
  }
}

export default Updating;
