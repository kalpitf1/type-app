import React from 'react';
import logo from './logo.svg';
import './App.css';

const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
letterArray.push("DONE")

// timer vars
var totalTime = 0
var prev = 0

function App() {
  const [letter, setLetter] = React.useState('')
  const [nextLetter, setNextLetter] = React.useState('a')

  function handleChange(event) {
    if (event.target.value === nextLetter) {
      setLetter(event.target.value)
      const idx = letterArray.findIndex(element => element === event.target.value)
      const next = letterArray[idx + 1]
      setNextLetter(next)
    }
    if (event.target.value === 'a') { // start timer when 'a' is pressed
      prev = Date.now()
    } else {  // add time b/w each keypress to timer
      var elapsedTime = Date.now() - prev  // time b/w current and previous keypress
      totalTime += elapsedTime  // increment total time
      prev = Date.now()  // update previous keypress time
    }
    document.getElementById("letterInput").value = ''
  }

  function resetApp(event) {
    setLetter('')
    setNextLetter('a')
    totalTime = 0
    prev = 0
  }

  return (
    <div class="App">
      <header class="header">
        <div class="navbar__brand">
          <img class="navbar__logo" src={logo} alt="logo" />
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
        <p>
          You typed: <strong> {letter} </strong>
        </p>
        <p>
          What's next: <strong> {nextLetter} </strong>
        </p>
        <p>
          <input onChange={handleChange} id="letterInput" />
        </p>
        <p>{totalTime ? `Total time ${(totalTime / 1000)} seconds` : 'Start typing'}</p>
        <button onClick={resetApp}>Reset</button>
      </div>
      <footer class="footer">
        <a href="#"> Created by @ </a>
      </footer>
    </div>
  );
}

export default App;
