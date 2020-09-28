import React from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import tr from "../translation.json";

const Dashboard = () => {
  return (
    <div className="ui container">
      <Navbar />
      <Titlebar title={tr.new_ticket} />
      <div className="ui segment">
        <div className="ui form">
          <div className="fields">
            <div className="ten wide field">
              <label>subject</label>
              <input type="text" placeholder="subject" />
            </div>
            <div className="six wide field">
              <label>subject</label>
              <div className="ui selection dropdown">
                <input type="hidden" name="department" />
                <i className="dropdown icon"></i>
                <div className="default text">department</div>
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
              <label>body</label>
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
