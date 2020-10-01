import React from "react";
import { Link } from "react-router-dom";
import tr from "../translation.json";

const Navbar = () => {
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
          مرتضی علی یاری
        </Link>
        <Link to="/" class="item">
          {tr.logout}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
