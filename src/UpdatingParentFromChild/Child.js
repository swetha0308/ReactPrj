import React, { PureComponent } from 'react'

class Child extends PureComponent {
    constructor(props) {
        super(props)

       
    }

    render() {
        return <button onClick={this.props.IncFunc}>Increment</button>;
    }
}

export default Child;