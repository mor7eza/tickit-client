import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import NewTicket from "./pages/NewTicket";
import AuthCheck from "./utils/AuthCheck";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AuthCheck />
        <Route exact path="/" component={NewTicket} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/user" component={NewUser} />
        <p className="footer">
          Crafted with <i className="heart icon"></i> by Morteza Aliyari
        </p>
      </Router>
    </AuthProvider>
  );
}

export default App;
