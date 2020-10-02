import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import { GET_USERS } from "../graphql/queries";
import tr from "../translation.json";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { loading } = useQuery(GET_USERS, {
    onCompleted({ getUsers }) {
      if (getUsers.success) {
        setUsers(getUsers.users);
      }
    }
  });

  return (
    <div className="ui container">
      <Navbar page="users" />
      <Titlebar title={tr.users} />
      <div className="ui segment">
        <table className="ui fixed single line striped selectable table">
          <thead>
            <tr>
              <th className="center aligned one wide">#</th>
              <th className="center aligned">{tr.full_name}</th>
              <th className="center aligned">{tr.email}</th>
              <th className="center aligned">{tr.role}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td className="center aligned">{index + 1}</td>
                  <td className="center aligned">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="center aligned">{user.email}</td>
                  <td className="center aligned">
                    {user.role === "ADMIN" ? tr.admin : user.role === "EXPERT" ? tr.expert : tr.user}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
