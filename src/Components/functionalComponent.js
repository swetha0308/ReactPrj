import React from "react";

function FunctionComp() {
  let name = "";
  let a = 6;
  let b = 8;
  const handleChange = (event) => {
    name = event.target.value;
    console.log(name);
  };

  return (
    <div>
      <h2>This is functional Component created by {name}</h2>
    </div>
  );
}

export default FunctionComp;
