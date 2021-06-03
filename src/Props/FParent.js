import React from 'react';
import FChild from './FChild';
import ClassChild from './ClassChild'
function FParent (){
let name ="vinnet";
    return (
        <div>
            <h2>This is FParent Comp</h2>
            <FChild person={name}></FChild>
            <ClassChild person="Syed"></ClassChild>
        </div>
    )
}
export default FParent;
/*
{
    person:"vineeth"
}
props= {
    person:"vineeth"

}
*/