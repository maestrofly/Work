import React, {component} from 'react';

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "Derrick"
    };
       // this.handleChangeName = this.handleChangeName.bind(this);

  }
   handleChangeName = () => {
     this.setState({name:"Derrick"})
   }

   render(){
     return(
       <div>
       <h2>My name is {this.state.name}</h2>
       </br>
       <button onClick={this.handleChangeName}>Click to change Name</button>
       
       </div>
     );
   }

}

export default App;