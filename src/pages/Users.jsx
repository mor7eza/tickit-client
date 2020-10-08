import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import { GET_USERS } from "../graphql/queries";
import tr from "../translation.json";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { loading } = useQuery(GET_USERS, {
    onCompleted({ getUsers }) {
      if (getUsers.success) {
        setUsers(getUsers.users);
        setUsersData(getUsers.users);
      }
    }
  });

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.length) {
      let result = usersData.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        if (fullName.includes(search) || user.role.includes(search) || user.email.includes(search)) {
          return user;
        }
      });
      if (!result) result = [];
      setUsers(result);
    } else if (!search.length) {
      setUsers(usersData);
    }
  }, [search, usersData]);

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
            <input type="text" placeholder={`${tr.search}...`} value={search} onChange={searchHandler} />
            <i class="users icon"></i>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="ui cards">
            {!users.length ? (
              <h3 class="ui icon header nodata-placeholder grey">
                <i class="folder open icon"></i>
                <div class="content">{tr.nodata}</div>
              </h3>
            ) : (
              users.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={`${user.firstName} ${user.lastName}`}
                  email={user.email}
                  role={user.role === "ADMIN" ? tr.admin : user.role === "EXPERT" ? tr.expert : tr.user}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
