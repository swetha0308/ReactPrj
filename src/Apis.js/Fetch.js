import React, { PureComponent } from "react";

class Fetch extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (res) => res.json(),
        () => console.log("Rejected")
      )
      .then((data) =>
        this.setState({
          list: [...data],
        })
      );
  }
  render() {
    console.log(this.state.list);
    return (
      <div>
        {" "}
        <h2>Fetch Data</h2>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
          </tr>
          {this.state.list.map((obj) => (
            <tr>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.username}</td>
              <td>{obj.email}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Fetch;

//postman 