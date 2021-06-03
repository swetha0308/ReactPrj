import React, { PureComponent } from "react";
import "./List.css";
class List extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ["syed", "sneha", "neha", "sana"],
      text:""
    };
    
  }
  handleChange = (event) => {
    this.setState({text:event.target.value})
    
  };
  handleClick = () => {
    
    this.setState({
      names: [...this.state.names, this.state.text],
      text:''
    });
  };
  render() {
    return (
      <div className="list">
        <input type="text" placeholder="Enter ur Name" onChange={this.handleChange} value={this.state.text}></input>
        <button onClick={this.handleClick}>Add name</button>
        <ul>
          {this.state.names.map((val,index) => (<>
            <input type="checkbox"></input> {val}<br></br>
          
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
//by end of the week 
//