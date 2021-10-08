import "./App.css";
import Home from "./Componenets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Componenets/Login";
import CreatPost from "./Componenets/CreatPost";
import AdminPosts from "./Componenets/AdminPosts";
import Rejected from "./Componenets/Rejected"
function App() {
  return (
    <div className="container">
      <Router>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createpost" component={CreatPost} />
            <Route exact path="/adminposts" component={AdminPosts} />
            <Route exact path="/rejected" component={Rejected} />
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
