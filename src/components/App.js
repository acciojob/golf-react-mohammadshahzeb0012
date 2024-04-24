// import React, { Component } from "react";
import { useEffect, useState } from 'react';

import "./App.css";

const App = () => {

  const [showBall, setShowBall] = useState(false)
  const [ballPosition, setBallPosition] = useState(0);
  console.log(ballPosition)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setBallPosition(prev => prev + 5)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [])

  const startHandel = () => {
    setShowBall(true)
  }

  const renderBallOrButton = () => {
    if (showBall) {
      return <div className="ball"
        style={{ left: ballPosition + 'px', }}
      >ball</div>
    } else {
      return <button onClick={startHandel} className='start'>start</button>
    }
  }


  return (
    <div className="playground">
      {renderBallOrButton()}
    </div>
  )
}






export default App;
