import React from "react";

function FChild(props) {
  return (
    <div>
      <h2>This is FChild Comp </h2>
      <h2> Props passed is {props.person}</h2>
    </div>
  );
}
export default FChild
/*
props= {
    person:"vineeth"
    
}
*/
