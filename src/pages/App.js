import React from "react";
import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import Account from "./Account";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/account" component={Account} />
      </Router>
    </div>
  );
}

export default App;
