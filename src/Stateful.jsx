import React, { component } from 'react'
class Input extends component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (event)=>{
        this.setState({value:event.target.value});
    }
    handleSubmit = (event) =>{
        alert('submitted:'+''+ this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label>
                        Name:
                        <input type ="text" value = {this.state.value} onChange {this.handleChange}/>
                    </label>
                    <input type ="submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

export default Input;