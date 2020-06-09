import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UsersList from "./components/users-list";
import UserDetails from "./components/user-details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/users-list/"]} component={UsersList} exact />
        <Route path="/user/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
