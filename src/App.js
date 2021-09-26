import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const state = { letter: '', nextLetter: '' }
const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
letterArray.push("DONE")

function App() {
  function handleChange(event) {
    setState({ letter: event.target.value })
    const idx = letterArray.findIndex(element => element === event.target.value)
    const next = letterArray[idx + 1]
    setState({ nextLetter: next })
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
          You typed: {state.letter}
        </p>
        <p>
          What's next: {state.nextLetter}
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

function setState(newState) {
  Object.assign(state, newState)
  renderApp()
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()

export default App;
