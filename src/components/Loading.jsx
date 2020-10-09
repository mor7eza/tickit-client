import React from "react";
import tr from "../translation.json";

const Loading = () => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{tr.loading}</div>
    </div>
  );
};

export default Loading;
