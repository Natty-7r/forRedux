import logo from "./logo.svg";
import "./App.css";
import ReducerWithNote from "./lessons/reducerWithNote";

const TimerFunction = function (props) {
  if (false)
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          me
        </header>
      </div>
    );
  const giveTime = function () {
    const now = new Date(Date.now());
    return <h2>{now.toLocaleTimeString()}</h2>;
  };
  const header = (
    <div className="whole">
      <div className="header">
        <div className="logo"></div>
        <ul className="header-lists">
          <li className="list">home</li>
          <li className="list">about</li>
          <li className="list">contact</li>
        </ul>
      </div>
      <div className="body">{giveTime()} </div>
    </div>
  );
  return header;
};

export default TimerFunction;
