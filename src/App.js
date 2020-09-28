import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Dashboard} />
    </Router>
  );
}

export default App;
