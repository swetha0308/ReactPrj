import React, { PureComponent } from "react";

class Tables extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userdata: [
        { id: 1, name: "syed", phno: "5879" },
        { id: 2, name: "Neha", phno: "58379" },
        { id: 3, name: "sneha", phno: "58729" },
        { id: 4, name: "Swathi", phno: "58479" },
        { id: 5, name: "Sindhu", phno: "58579" },
        { id: 6, name: "Aditya", phno: "58797" },
        { id: 7, name: "Pragyaan", phno: "58879" },
      ],
    };
  }

  render() {
    return (
      <table>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
        {this.state.userdata.map((obj) => (
          <tr>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.phno}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Tables ;


/*

<table>
<tr>
<th>Name</th>
<th> Adress </th>
</tr>
<tr>
<td>Syed </td>
<td>Hyd</td>
</tr>
</table>
*/