import React, { PureComponent } from 'react'
import UpdateFunction from './UpdateFunction'
class Hover extends PureComponent {
   
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.IncrementCounter}>Hover Count is {this.props.state.count}</h2>
            </div>
        )
    }
}

export default UpdateFunction (Hover)