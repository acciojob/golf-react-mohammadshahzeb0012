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


  return (
    <div className="playground">
      {showBall && <div className="ball"
        style={{ left: ballPosition + 'px', }}
      >ball</div>}

      {!showBall && <button onClick={startHandel} className='start'>start</button>
      }
    </div>
  )
}






export default App;
