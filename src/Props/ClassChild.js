import React from 'react';

class ClassChild extends React.Component{
    constructor(props){
         super(props);
         
    }

    render(){
        return <div>
            <h2> props recieved in ClassChild is {this.props.person}</h2>
        </div>
    }
}

export default ClassChild