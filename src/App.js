//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(666);
  const [awayScore, setAwayScore] = useState(4);
  const [quarterNumber, setQuarterNumber] = useState(0);
  function funkyHomeTouchdown (event) {
    setHomeScore(homeScore + 7); 
    setAwayScore(awayScore - 7);
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">HollyHead Harpies</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Chudley Cannons</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarterNumber}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {funkyHomeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {e => {setHomeScore(homeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {e => {setAwayScore(awayScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {e => {setAwayScore(awayScore + 3)}}>Away Field Goal</button>
        </div>
        <div>
          <button className="quarterButton" onClick = {e => {setQuarterNumber(quarterNumber + 1)}}>Quarter</button> 
        </div>
      </section>
    </div>
  );
}

export default App;
