import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { AuthContext } from "../context/auth";
import tr from "../translation.json";
import { LOGIN } from "../graphql/mutations";

import Notification from "../components/Notification";

const Login = (props) => {
  const context = useContext(AuthContext);
  if (context.id) props.history.push("/");

  const [values, setValues] = useState({ email: "", password: "" });
  const [notify, setNotify] = useState({ show: false, type: "", message: "" });
  const [error, setError] = useState(false);

  const [loginUser, { loading }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login.success === true) {
        context.login(login.token);
        props.history.push("/");
      } else {
        setNotify({ show: true, type: "error", message: tr.bad_credential });
        setError(true);
      }
    },
    variables: values
  });

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setNotify({ show: false });
    setError(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginUser();
  };
  return (
    <div className="ui three column centered grid middle aligned full-height">
      {notify.show ? <Notification type={notify.type} message={notify.message} /> : null}
      <div className="column">
        <h2 className="ui blue header">
          <i className="check circle icon"></i>
          <div className="content">{tr.signin_to_account}</div>
        </h2>
        <form className={"ui large form" + (loading ? " loading" : "")} onSubmit={onSubmitHandler}>
          <div className="ui stacked segment">
            <div className={"field" + (error ? " error" : "")}>
              <div className="ui right icon input">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChangeHandler}
                  placeholder={tr.email}
                  required
                />
                <i className="user icon"></i>
              </div>
            </div>
            <div className={"field" + (error ? " error" : "")}>
              <div className="ui right icon input">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={onChangeHandler}
                  placeholder={tr.password}
                  required
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <button className={"ui fluid primary button" + (loading ? " loading" : "")} type="submit">
              {tr.login}
            </button>
          </div>
        </form>
        <div className="ui center aligned segment">
          <p>
            {tr.dont_have_account} <Link to="/register">{tr.signup}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
