import React from "react";
import tr from "./../translation.json";
import { Link } from "react-router-dom";

const UserCard = ({ name, role, email, id }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="center aligned header">{name}</div>
        <div className="center aligned meta">{role}</div>
        <div className="center aligned description">{email}</div>
      </div>
      <Link
        to={`/users/${id}`}
        class={"ui bottom attached button " + (role === tr.admin ? "purple" : role === tr.expert ? "teal" : "blue")}
      >
        {tr.details}
      </Link>
    </div>
  );
};

export default UserCard;
