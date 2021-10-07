import "./App.css";
import Home from "./Componenets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Componenets/Login";
import CreatPost from "./Componenets/CreatPost";
function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createpost" component={CreatPost} />
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
