import React from "react";
import { Helmet } from "react-helmet";
import tr from "../translation.json";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";

const User = (props) => {
  return (
    <div className="ui container">
      <Navbar page="users" />
      <Titlebar title={tr.add_user} />
      <div className="ui segment">
        <form className="ui form">
          <div className="fields">
            <div className="six wide field">
              <label>{tr.first_name}</label>
              <input type="text" placeholder={tr.first_name} />
            </div>
            <div className="six wide field">
              <label>{tr.last_name}</label>
              <input type="text" placeholder={tr.last_name} />
            </div>
            <div className="four wide field">
              <label>{tr.role}</label>
              <div className="ui selection dropdown">
                <input type="hidden" name="department" />
                <i className="dropdown icon"></i>
                <div className="default text">{tr.role}</div>
                <div className="menu">
                  <div className="item" data-value="1">
                    sport
                  </div>
                  <div className="item" data-value="2">
                    financial
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fields">
            <div className="six wide field">
              <label>{tr.email}</label>
              <input type="email" placeholder={tr.email} />
            </div>
          </div>
          <div className="fields">
            <div className="six wide field">
              <label>{tr.password}</label>
              <input type="password" placeholder={tr.password} />
            </div>
          </div>
          <button className="ui button blue" type="submit">
            {tr.submit}
          </button>
          <button className="ui button left floated red">{tr.cancel}</button>
        </form>
      </div>
      <Helmet>
        <script>$(".ui.dropdown").dropdown()</script>
      </Helmet>
    </div>
  );
};

export default User;
