import React, { Component } from "react";
import Post from "../post";
import Input from "../ui/input";
import Info from "../info";

class App extends Component {
  state = {
    inputValue: ""
  }

  inputHandler = ({target: {value}}) => {
    this.setState({
      inputValue: value
    })
  }

  onKeyPressHandler = ({key}) => {
    if(key === "Enter")
      this.setState({
        inputValue: ""
      })
  }

  buttonHandler = (value) => {
    this.setState({
      inputValue: value
    })
  }

  render(){
    const {inputValue} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Input value={inputValue} onChange={this.inputHandler} onKeyPress={this.onKeyPressHandler}/>
          <button className="testButton" onClick={() => this.buttonHandler('it is text')}>Click me!</button>
          <Post text="post"/>
          <Info/>
        </header>
      </div>
    );
  }
}

export default App;
