import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth";

const AuthCheck = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  if (!context.id) {
    history.push("/login");
  }
  return <div></div>;
};

export default AuthCheck;
