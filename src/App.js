import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Unico from "./components/Unico";
import Series from "./components/Series";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/unico"component={Unico}>
            <Unico />
          </Route>
          <Route path="/series"component={Series}>
            <Series />
          </Route>
          <Route path="/movies"component={Movies}>
            <Movies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

