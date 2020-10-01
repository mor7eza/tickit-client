import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import tr from "../translation.json";

const NewTicket = () => {
  return (
    <div className="ui container">
      <Navbar />
      <Titlebar title={tr.new_ticket} />
      <div className="ui segment">
        <form className="ui form">
          <div className="fields">
            <div className="ten wide field">
              <label>{tr.subject}</label>
              <input type="text" placeholder={tr.subject} />
            </div>
            <div className="six wide field">
              <label>{tr.department}</label>
              <div className="ui selection dropdown">
                <input type="hidden" name="department" />
                <i className="dropdown icon"></i>
                <div className="default text">{tr.department}</div>
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
            <div className="sixteen wide field">
              <label>{tr.body}</label>
              <textarea placeholder={tr.body}></textarea>
            </div>
          </div>
          <button className="ui button blue">{tr.submit}</button>
          <button className="ui button left floated red">{tr.cancel}</button>
        </form>
      </div>
      <Helmet>
        <script>$(".ui.dropdown").dropdown()</script>
      </Helmet>
    </div>
  );
};

export default NewTicket;
