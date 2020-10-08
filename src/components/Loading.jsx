import React from "react";
import tr from "../translation.json";

const Loading = () => {
  return (
    <div class="ui active inverted dimmer">
      <div class="ui text loader">{tr.loading}</div>
    </div>
  );
};

export default Loading;
