import React, {Component } from "react";

class Ap extends Component {
   
    state={
        counter:1,
        changer: "WELCOME to REACT",
        inputText:""
    }
   /* handleChanger(){
        let locChanger = "this is what you are learning"
        this.setState({
            changer:locChanger
        })
    }*/
    handleClick =()=>{
        let localCounter = this.state.counter;
        this.setState({
            counter:localCounter+1,
            changer:"this is what you are learning"

        })
    }
    handleInputChange=(event)=>{
        this.setState({
            inputText : event.target.value
        })

    }
    render() {
        return (
            <>
            <h1>{this.state.changer} </h1>
            <button onClick={this.handleClick} >Add </button>
            <button onClick={this.handleChanger}>Change</button>
            <p>{this.state.counter}</p>
            <input  onChange={this.handleInputChange}/>
            <p>{this.state.inputText}</p>
            
            </>
        )
    }
}
export default Ap ;