import React, { PureComponent } from 'react'
import axios from 'axios'
class Axios extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:[]
        }
    }
 
    componentDidMount(){
        let newObj={
            name:"syed",
            id:8
        }
        axios.post('https://jsonplaceholder.typicode.com/users',newObj)
        .then((res)=>this.setState({list:res}))
    }

    
    render() {
        console.log(this.state.list)
        return (
           <div>
               <h2>Axios </h2>
           </div> 
        )
    }
}
/*
axios 
http methods
GET
- data retrieve
POST
-add new data
PUT
- [{name:"Afroze",id:6},{2}],{3}
PACTH
-update particular property .
DELETE
- delete the record

*/

export default Axios