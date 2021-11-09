import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Weather } from './components/Weather';

function App() {
  return (
    <>
      <div className="App">
        <Router>

          <div className="nav-card">
            <Link to="/colombo-weather">Colombo Weather</Link>
          </div>


          <Switch>
            <Route path="/colombo-weather">
              <Weather />
            </Route>

          </Switch>


        </Router>
      </div>
    </>
  );
}

export default App;
