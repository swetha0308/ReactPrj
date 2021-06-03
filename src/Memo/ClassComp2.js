import React, { PureComponent } from 'react'

class ClassComp2 extends PureComponent {
    constructor(props) {
        super(props)

      
    }

    render() {
        console.log("---renering Classcomp2 ------")
        return (
           <h2>Count in Cmp2 {this.props.count}</h2> 
        )
    }
}

export default ClassComp2