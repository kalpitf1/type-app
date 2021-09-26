import React from 'react';
import logo from './logo.svg';
import './App.css';

const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
letterArray.push("DONE")

function App() {
  const [letter, setLetter] = React.useState('')
  const [nextLetter, setNextLetter] = React.useState('a')

  function handleChange(event) {
    setLetter(event.target.value)
    const idx = letterArray.findIndex(element => element === event.target.value)
    const next = letterArray[idx + 1]
    setNextLetter(next)
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
      <div class="main-wrapper"> App content goes here
        <p>
          You typed: {letter}
        </p>
        <p>
          What's next: {nextLetter}
        </p>
        <p>
          <input onChange={handleChange} />
        </p>
      </div>
      <footer class="footer">
        <a href="#"> Created by @ </a>
      </footer>
    </div>
  );
}

export default App;
