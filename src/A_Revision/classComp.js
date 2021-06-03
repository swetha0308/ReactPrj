import React from "react";
import "./ClassCss.css";
class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "syed",
    };
  }

  handleClick = () => {
    this.setState({
      name: this.state.name.toUpperCase(),
    });
  };


  render() {
    return (
      <div className="headerClass">
        <h2>
          Class Comp<span className="nameColor"> {this.state.name} </span>
        </h2>
        <button onClick={this.handleClick}>Capitalize Name</button>
      </div>
    );
  }
}

export default ClassComp;
