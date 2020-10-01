import React from "react";

const Notification = ({ type, message }) => {
  let color, icon;
  switch (type) {
    case "error":
      color = "red";
      icon = "exclamation";
      break;
    case "info":
      color = "yellow";
      icon = "info";
      break;
    case "success":
      color = "green";
      icon = "check";
      break;
    default:
      color = "";
      icon = "";
  }
  return (
    <div className="notification">
      <div className={"ui compact small message " + color}>
        <p>
          <i className={"icon " + icon}></i>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
