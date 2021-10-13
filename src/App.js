import "./App.css";
import Home from "./Componenets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Componenets/Login";
import CreatPost from "./Componenets/CreatPost";
import Rejected from "./Componenets/Rejected";
import Nav from "./Componenets/Nav";
import Reviewer from "./Componenets/Reviewer";
import RolePosts from "./Componenets/RolePosts";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Nav />
        {/* <Route> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createpost" component={CreatPost} />
          <Route exact path="/roles" component={RolePosts} />
          <Route exact  path="/reviewer/:id" component={Reviewer} />
          <Route exact  path="/auditor/:id" component={Reviewer} />
          <Route exact path="/rejected/:id" component={Rejected} />
        </Switch>
        {/* </Route> */}
      </Router>
    </div>
  );
}

export default App;
