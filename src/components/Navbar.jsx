import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import tr from "../translation.json";
import { AuthContext } from "../context/auth";

const Navbar = (props) => {
  const { page } = props;
  const context = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    context.logout();
    history.push("/login");
  };
  return (
    <div className="ui stackable menu">
      <div className="item">
        <i className="check circle blue icon" style={{ fontSize: "1.4em" }}></i>
      </div>
      <Link to="/" className={"item" + (page === "newTicket" ? " active" : "")}>
        {tr.new_ticket}
      </Link>
      <Link to="/tickets" className={"item" + (page === "tickets" ? " active" : "")}>
        {tr.tickets}
      </Link>
      <Link to="/departments" className={"item" + (page === "departments" ? " active" : "")}>
        {tr.departments}
      </Link>
      <Link to="/users" className={"item" + (page === "users" ? " active" : "")}>
        {tr.users}
      </Link>
      <div className="left menu">
        <Link to="/me" className="item">
          {`${context.firstName} ${context.lastName}`}
        </Link>
        <a href="/" className="item" onClick={logoutHandler}>
          {tr.logout}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
