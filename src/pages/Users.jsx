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
        let role;
        switch (user.role) {
          case "ADMIN":
            role = tr.admin;
            break;
          case "EXPERT":
            role = tr.expert;
            break;
          default:
            role = tr.user;
            break;
        }
        const fullName = `${user.firstName} ${user.lastName}`;
        if (fullName.includes(search) || role.includes(search) || user.email.includes(search)) return user;
        return null;
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
          <div className="ui right icon input float-left">
            <input type="text" placeholder={`${tr.search}...`} value={search} onChange={searchHandler} />
            <i className="users icon"></i>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="ui cards">
            {!users.length ? (
              <h3 className="ui icon header nodata-placeholder grey">
                <i className="folder open icon"></i>
                <div className="content">{tr.nodata}</div>
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
