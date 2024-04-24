import React, { Component } from "react";
import "./App.css";




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this)
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  };

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>
    } else {
      return <button onClick={this.buttonClickHandler} >Start</button>
    }
  }

  handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      this.setState((prevState) => ({
        ballPosition: {
          left: `${parseInt(prevState.ballPosition.left) + 5}px`
        }
      }));
    }
  };
  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { renderBall, ballPosition } = this.state;
    return (
      <div className="playground">


        {this.renderBallOrButton()}
      </div>
    )
  }
}


  
  

export default App;
