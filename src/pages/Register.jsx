import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { AuthContext } from "../context/auth";
import tr from "../translation.json";
import { REGISTER } from "../graphql/mutations";
import Notification from "../components/Notification";

const Register = (props) => {
  const context = useContext(AuthContext);
  if (context.id) props.history.push("/");

  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [notify, setNotify] = useState({ show: false, type: "", message: "" });
  const [error, setError] = useState([]);

  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted({ register }) {
      if (register.success) {
        context.login(register.token);
        props.history.push("/");
      } else {
        register.errors.forEach((err) => {
          error.push(err.field);
          setError(error);
        });
        setNotify({ show: true, type: "error", message: register.message });
      }
    },
    variables: values
  });

  const onChangeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setError([]);
    setNotify({ show: false });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register();
  };

  return (
    <div className="ui three column centered grid middle aligned full-height">
      {notify.show ? <Notification type={notify.type} message={notify.message} /> : null}
      <div className="column">
        <h2 className="ui blue header">
          <i className="check circle icon"></i>
          <div className="content">{tr.register_an_account}</div>
        </h2>
        <form className={"ui form" + (loading ? " loading" : "")} onSubmit={onSubmitHandler}>
          <div className="ui stacked segment">
            <div className={"required field" + (error.includes("firstName") ? " error" : "")}>
              <label>{tr.first_name}</label>
              <input
                type="text"
                placeholder={tr.first_name}
                name="firstName"
                required
                onChange={onChangeHandler}
                value={values.firstName}
              />
            </div>
            <div className={"required field" + (error.includes("lastName") ? " error" : "")}>
              <label>{tr.last_name}</label>
              <input
                type="text"
                placeholder={tr.last_name}
                name="lastName"
                required
                onChange={onChangeHandler}
                value={values.lastName}
              />
            </div>
            <div className={"required field" + (error.includes("email") ? " error" : "")}>
              <label>{tr.email}</label>
              <input
                type="email"
                placeholder={tr.email}
                name="email"
                required
                onChange={onChangeHandler}
                value={values.email}
              />
            </div>
            <div className={"required field" + (error.includes("password") ? " error" : "")}>
              <label>{tr.password}</label>
              <input
                type="password"
                placeholder={tr.password}
                name="password"
                required
                onChange={onChangeHandler}
                value={values.password}
              />
            </div>

            <button className={"ui fluid primary button" + (loading ? " loading" : "")} type="submit">
              {tr.register}
            </button>
          </div>
        </form>
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
