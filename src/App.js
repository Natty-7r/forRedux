import logo from "./logo.svg";
import "./App.css";
import NoteApp from "./components/NoteApp";
import Footer from "./components/eComponents/Footer/Footer";

function App(props) {
  if (false)
    return (
      <div className="all">
        <div className="other"></div>
        <Footer />;
      </div>
    );
  return <NoteApp />;
}
export default App;
