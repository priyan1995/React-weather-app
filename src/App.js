import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { HomeComponent } from "./components/Home";
import { SearchWeather } from "./components/SearchWeather";
import { Weather } from './components/Weather';

function App() {
  return (
    <>
      <div className="App">
        <Router>

          <div className="nav-card">
            <Link to="/">Home</Link>
            <Link to="/colombo-weather">Colombo Weather</Link>

          </div>


          <Switch>

            <Route exact path="/">
              <HomeComponent />
              <SearchWeather />
            </Route>


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
