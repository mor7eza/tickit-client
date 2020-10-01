import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";
let initialState = { id: null, firstName: null, lastName: null };
if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState = {
      id: decodedToken.id,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName
    };
  }
}
const AuthContext = createContext({
  id: null,
  firstName: null,
  lastName: null,
  login: (token) => {},
  logout: () => {}
});
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    case "LOGOUT":
      return {
        ...state,
        id: null,
        firstName: null,
        lastName: null
      };
    default:
      return state;
  }
};
const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(token) {
    localStorage.setItem("jwtToken", token);
    const { id, firstName, lastName } = jwtDecode(token);
    dispatch({
      type: "LOGIN",
      payload: { id, firstName, lastName }
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT"
    });
  }
  return (
    <AuthContext.Provider
      value={{
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        login,
        logout
      }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
