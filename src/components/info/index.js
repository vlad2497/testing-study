import React, {Component} from "react";

export default class Info extends Component{
  state = {
    windowSize: 0
  }

  componentDidMount() {
    this.changeTitle()
    window.addEventListener("resize", this.handleWidth)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.changeTitle()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWidth)
  }

  handleWidth = () => {
    this.setState({
      windowSize: window.innerWidth
    })
  }

  changeTitle = () => {
    document.title = `Page width: ${this.state.windowSize}`
  }

  render(){
    return (
      <div>Window size: {this.state.windowSize}</div>
    )
  }

}
