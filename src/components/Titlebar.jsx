import React from "react";

const Titlebar = ({ title }) => {
  return (
    <div className="ui blue raised segment">
      <h3 className="ui header">{title}</h3>
    </div>
  );
};

export default Titlebar;
