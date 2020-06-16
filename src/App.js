import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const initialTime = 15;
  const initialState = 0;
  const [homeScore, setHomeScore] = useState(initialState);
  const [visitorScore, setVisitorScore] = useState(initialState);
  const [countdown, setCountdown] = useState(initialTime);
  const reset = () => {
    setHomeScore(initialState);
    setVisitorScore(initialState);
    setCountdown(initialTime);
  };
  useEffect(() => {
    const timer =
      countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <div className="App">
      <div className="scoreboard-bg">
        <div className="timer-container">
          <div className="timer">00:{countdown}</div>
          <div className="text">Time</div>
        </div>
        <div className="home-visitor-container">
          <div className="home-container">
            <div className="home">{homeScore}</div>
            <div className="text">Home</div>
            <div
              onClick={() =>
                setHomeScore(homeScore <= 0 ? initialState : homeScore - 1)
              }
              className="minus"
            >
              -
            </div>
            <div onClick={() => setHomeScore(homeScore + 1)} className="plus">
              +
            </div>
          </div>
          <div className="visitor-container">
            <div
              onClick={() => setVisitorScore(visitorScore + 1)}
              className="visitor"
            >
              {visitorScore}
            </div>
            <div className="text">Visitor</div>
            <div
              onClick={() =>
                setVisitorScore(
                  visitorScore <= 0 ? initialState : visitorScore - 1
                )
              }
              className="minus"
            >
              -
            </div>
            <div
              onClick={() => setVisitorScore(visitorScore + 1)}
              className="plus"
            >
              +
            </div>
          </div>
        </div>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
