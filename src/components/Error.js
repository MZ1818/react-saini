import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OO - OOOOHHH !!!</h1>
      <p>Something went wrong</p>
      <p>
        {err.status}:{err.statusText}
      </p>
    </div>
  );
};

export default Error;
