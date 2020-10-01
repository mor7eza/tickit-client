import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { AuthContext } from "../context/auth";
import tr from "../translation.json";
import { LOGIN } from "../graphql/mutations";

const Login = (props) => {
  const context = useContext(AuthContext);
  if (context.id) props.history.push("/");

  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const [loginUser, { loading }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      console.log(login);
      if (login.success === true) {
        context.login(login.token);
        props.history.push("/");
      } else {
        setError(true);
      }
    },
    variables: values
  });

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setError(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginUser();
  };
  return (
    <div className="ui three column centered grid middle aligned full-height">
      <div className="column">
        <h2 className="ui blue header">
          <i className="check circle icon"></i>
          <div className="content">{tr.signin_to_account}</div>
        </h2>
        <form className="ui large form" onSubmit={onSubmitHandler}>
          <div className="ui stacked segment">
            <div className={"field" + (error ? " error" : "")}>
              <div className="ui right icon input">
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={onChangeHandler}
                  placeholder={tr.email}
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
