import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import { GET_USERS } from "../graphql/queries";
import tr from "../translation.json";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { loading } = useQuery(GET_USERS, {
    onCompleted({ getUsers }) {
      console.log(users);
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
        <div className="ui pilled segment">
          <Link to="/user" className="ui primary button">
            {tr.add_user}
          </Link>
          <div class="ui right icon input float-left">
            <input type="text" placeholder={`${tr.search_user}...`} />
            <i class="users icon"></i>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="ui cards">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                role={user.role === "ADMIN" ? tr.admin : user.role === "EXPERT" ? tr.expert : tr.user}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
