import React from "react";
import tr from "../translation.json";

const Navbar = () => {
  return (
    <div class="ui stackable menu">
      <div class="item">
        <i className="check circle blue icon" style={{ fontSize: "1.4em" }}></i>
      </div>
      <a class="item active">{tr.new_ticket}</a>
      <a class="item">{tr.tickets}</a>
      <a class="item">{tr.departments}</a>
      <a class="item">{tr.users}</a>
      <div className="left menu">
        <a class="item">مرتضی علی یاری</a>
        <a class="item">{tr.logout}</a>
      </div>
    </div>
  );
};

export default Navbar;
