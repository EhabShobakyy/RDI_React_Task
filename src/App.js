import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import NavBar from "./Layout/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
