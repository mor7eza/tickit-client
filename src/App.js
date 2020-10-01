import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import NewTicket from "./pages/NewTicket";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={NewTicket} />
        <Route exact path="/tickets" component={Tickets} />
        <p className="footer">
          Crafted with <i className="heart icon"></i> by Morteza Aliyari
        </p>
      </Router>
    </AuthProvider>
  );
}

export default App;
