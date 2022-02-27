import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Feed from "./components/Feed";
import AppState from "./context/AppState";
function App() {
  return (
    <>
      <h1>Welcome to useContext Example</h1>
      <div>
        <h1>This is the Home Page</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/feeds">Feeds</Link>
              </li>
            </ul>
          </nav>
          <AppState>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/feeds" element={<Feed />} />
            </Routes>
          </AppState>
        </Router>
      </div>
    </>
  );
}

export default App;
