import React from "react";

import tr from "../translation.json";

const Login = () => {
  return (
    <div className="ui three column centered grid middle aligned full-height">
      <div className="column">
        <h2 className="ui blue header">
          <i className="check circle icon"></i>
          <div className="content">{tr.signin_to_account}</div>
        </h2>
        <div className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <input type="text" placeholder={tr.email} />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input type="password" placeholder={tr.password} />
                <i className="lock icon"></i>
              </div>
            </div>
            <button className="ui fluid primary button" type="submit">
              {tr.login}
            </button>
          </div>
        </div>
        <div className="ui segment">
          <p>dont have an account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
