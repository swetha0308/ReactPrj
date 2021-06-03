import React from 'react'
const UpdateFunction = (OriginalComp)=>{

    return class NewComp extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
      }

      handleClick = () => {
        this.setState({ count: this.state.count + 1 });
      };

      render(){
          return <OriginalComp state={this.state} handleClick= {this.handleClick}></OriginalComp>
      }
    };
}
export default  UpdateFunction;