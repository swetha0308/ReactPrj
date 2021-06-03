import React, { PureComponent } from 'react'
import HoverComp from './HoverComp' ;
import ClickCounter from './ClickCounter'
class MainComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <div>
               <HoverComp>

               </HoverComp>
               <ClickCounter></ClickCounter>
           </div> 
        )
    }
}

export default MainComp