import React from "react";
import ClassComp from "./classComp";
function FComp() {
  let name = "Syed";

  const handleClick = () => {
    name = name.toUpperCase();
    console.log(name);
  };

  return (
    <div>
      <h2>Welcome to React {name} </h2>
      <ClassComp name={name}></ClassComp>
      <button onClick={handleClick}>Capitalize</button>
    </div>
  );
}

export default FComp;

/*
{
    name:"syed"
}

HTML - eror 
user login login 

*/
