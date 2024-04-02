import React, { Component } from 'react'

class Used extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"chinmaya",
            age:23,
        };
    }
     nameChangeHandler(){
       this.setState({name:"chinmaya duplicated"}) ;
    }
    render(){
        return (
            <div>
                <h1>Welcome {this.state.name} you have  {this.state.age}Years Old.</h1>
                <br></br><button onClick={this.nameChangeHandler.bind(this)}>Button</button>
            </div>
        );
    }
}
export let x=1000;
export default Used






























// const Used = () => {
//   return (
//     <div>
//         <h1>Dear user X years, Welcome.</h1>
//     </div>
//   )
// }

// export default Used