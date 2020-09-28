import React from "react";
import { Link } from "react-router-dom";

import tr from "../translation.json";

const Register = () => {
  return (
    <div className="ui three column centered grid middle aligned full-height">
      <div className="column">
        <h2 className="ui blue header">
          <i className="check circle icon"></i>
          <div className="content">{tr.register_an_account}</div>
        </h2>
        <div className="ui form">
          <div className="ui stacked segment">
            <div className="field">
              <label>{tr.first_name}</label>
              <input type="text" placeholder={tr.first_name} />
            </div>
            <div className="field">
              <label>{tr.last_name}</label>
              <input type="text" placeholder={tr.last_name} />
            </div>
            <div className="field">
              <label>{tr.email}</label>
              <input type="text" placeholder={tr.email} />
            </div>
            <div className="field">
              <label>{tr.password}</label>
              <input type="password" placeholder={tr.password} />
            </div>

            <button className="ui fluid primary button" type="submit">
              {tr.register}
            </button>
          </div>
        </div>
        <div className="ui center aligned segment">
          <p>
            {tr.already_have_account} <Link to="/login">{tr.login}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
