import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" }
    };
  }

  buttonClickHandler = () => {
    this.setState({
      renderBall: true
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      this.setState((prevState) => ({
        ballPosition: {
          left: `${parseInt(prevState.ballPosition.left) + 5}px`
        }
      }));
    }
  };

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
        {renderBall ? (
          <div className="ball" style={ballPosition}></div>
        ) : (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
