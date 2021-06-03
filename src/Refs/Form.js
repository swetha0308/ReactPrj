import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.inputRef = React.createRef();

    }

    getEmail=()=>{
        console.log(this.inputRef.current.value)
    }

    componentDidMount(){
       console.log( this.inputRef.current.focus());
    }

    render() {
        return (
            <form>
                <label>Email :- </label>
                <input type="email" onChange={this.getEmail} ref={this.inputRef}></input><br></br>
                <label>Password :-</label>
                <input type="password" onChange={this.getPassword}></input>
            </form>
        )
    }
}

export default Form;