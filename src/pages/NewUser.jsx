import React, { useState } from "react";
import { Helmet } from "react-helmet";
import tr from "../translation.json";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import Notification from "../components/Notification";
import { useMutation } from "@apollo/client";
import { NEW_USER } from "../graphql/mutations";

const NewUser = (props) => {
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", password: "", role: "USER" });
  const [notify, setNotify] = useState({ show: false, type: "", message: "" });
  const [error, setError] = useState([]);
  const [newUser, { loading }] = useMutation(NEW_USER, {
    onCompleted({ newUser }) {
      if (newUser.success) {
        props.history.push("/users");
      } else {
        newUser.errors.forEach((err) => {
          error.push(err.field);
          setError(error);
        });
        setNotify({ show: true, type: "error", message: newUser.message });
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
    newUser();
  };
  return (
    <div className="ui container">
      <Navbar page="users" />
      <Titlebar title={tr.add_user} />
      <div className="ui segment">
        <form className="ui form" onSubmit={onSubmitHandler}>
          <div className="fields">
            <div className={"six wide required field" + (error.includes("firstName") ? " error" : "")}>
              <label>{tr.first_name}</label>
              <input type="text" required placeholder={tr.first_name} name="firstName" onChange={onChangeHandler} />
            </div>
            <div className={"six wide required field" + (error.includes("lastName") ? " error" : "")}>
              <label>{tr.last_name}</label>
              <input type="text" required placeholder={tr.last_name} name="lastName" onChange={onChangeHandler} />
            </div>
            <div className="four wide field">
              <label>{tr.role}</label>
              <select name="role" className="ui dropdown" onChange={onChangeHandler}>
                <option value="USER">{tr.user}</option>
                <option value="EXPERT">{tr.expert}</option>
                <option value="ADMIN">{tr.admin}</option>
              </select>
            </div>
          </div>

          <div className="fields">
            <div className={"six wide required field" + (error.includes("email") ? " error" : "")}>
              <label>{tr.email}</label>
              <input type="email" required placeholder={tr.email} name="email" onChange={onChangeHandler} />
            </div>
          </div>
          <div className="fields">
            <div className={"six wide required field" + (error.includes("password") ? " error" : "")}>
              <label>{tr.password}</label>
              <input type="password" required placeholder={tr.password} name="password" onChange={onChangeHandler} />
            </div>
          </div>
          <button className="ui button blue" type="submit">
            {tr.submit}
          </button>
          <button className="ui button left floated red" onClick={() => props.history.push("/users")}>
            {tr.cancel}
          </button>
        </form>
      </div>
      <Helmet>
        <script>$(".ui.dropdown").dropdown()</script>
      </Helmet>
      {notify.show ? <Notification type={notify.type} message={notify.message} /> : null}
    </div>
  );
};

export default NewUser;
