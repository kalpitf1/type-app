import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Create from "./components/create";
import Leaderboard from './components/leaderboard';

const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
letterArray.push("DONE")

// timer vars
var totalTime = 0
var prev = 0

function App() {
  const [nextLetter, setNextLetter] = useState('a')

  function handleChange(event) {
    event.target.value = event.target.value.toLowerCase()
    let currChar = event.target.value.at(-1)
    if (currChar === nextLetter) {
      const idx = letterArray.findIndex(element => element === currChar)
      const next = letterArray[idx + 1]
      setNextLetter(next)
    }
    timer(event)
  }

  function timer(event) {
    if (nextLetter === 'a' && event.target.value !== 'a') { // ignore all keys before 'a' for timer calculation
      return
    }
    if (event.target.value === 'a') { // start timer when 'a' is pressed
      prev = Date.now()
    } else {  // add time b/w each keypress to timer
      var elapsedTime = Date.now() - prev  // time b/w current and previous keypress
      totalTime += elapsedTime  // increment total time
      prev = Date.now()  // update previous keypress time
    }
  }

  function resetApp(event) {
    document.getElementById("letterInput").value = ''
    setNextLetter('a')
    totalTime = 0
    prev = 0
  }

  return (
    <div class="App">
      <header class="header">
        <div class="navbar__brand">
          <img class="navbar__logo" width="57" height="40" src={logo} alt="logo" />
          <strong class="navbar__title"> Type App </strong>
        </div>
        <nav>
          <ul class="navbar__items">
            <li><a href="https://github.com/kalpitf1/type-app">Github</a></li>
            {/* <li><a href="#">About</a></li> */}
          </ul>
        </nav>
      </header>
      <div class="main-wrapper">
        <label for="letterInput">
          <p>{nextLetter.length === 1 ? `What's next: ` : ''}
            <strong> {nextLetter} </strong>
          </p>
        </label>
        <p>
          <input onChange={handleChange} id="letterInput" autocomplete="off" />
        </p>
        <p>{totalTime ? `Total time ${(totalTime / 1000)} seconds` : 'Start typing'}</p>
        <button onClick={resetApp}>Reset</button>
        <p>
          <Create time={(totalTime / 1000)} gameEnded={nextLetter === "DONE" ? 1 : 0} parentCallback={resetApp} />
        </p>
        <p>
          <Leaderboard />
        </p>
      </div>
      <footer class="footer">
        <a href="https://www.linkedin.com/in/kalpit-f/"> Created by Kalpit </a>
      </footer>
    </div>
  );
}

export default App;
