import React from 'react'

function FunctionComp(props) {
    console.log("rendering functional comp----")
    return (

        <h2>Count is {props.count}</h2>
    )
}

export default React.memo(FunctionComp);

//memoization 



