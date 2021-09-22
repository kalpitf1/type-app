import logo from './logo.svg';
import './App.css';

function App() {
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
      <div class="main-wrapper"> App content goes here </div>
      <footer class="footer">
        <a href="#"> Created by @ </a>
      </footer>
    </div>
  );
}

export default App;
