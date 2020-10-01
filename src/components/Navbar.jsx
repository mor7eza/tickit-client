import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import tr from "../translation.json";
import { AuthContext } from "../context/auth";

const Navbar = (props) => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = (event) => {
    context.logout();
    history.push("/login");
  };
  return (
    <div class="ui stackable menu">
      <div class="item">
        <i className="check circle blue icon" style={{ fontSize: "1.4em" }}></i>
      </div>
      <Link to="/" class="item active">
        {tr.new_ticket}
      </Link>
      <Link to="/tickets" class="item">
        {tr.tickets}
      </Link>
      <Link to="/departments" class="item">
        {tr.departments}
      </Link>
      <Link to="/users" class="item">
        {tr.users}
      </Link>
      <div className="left menu">
        <Link to="/me" class="item">
          {`${context.firstName} ${context.lastName}`}
        </Link>
        <Link class="item" onClick={logoutHandler}>
          {tr.logout}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
