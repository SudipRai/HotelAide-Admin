import React from "react";
import { Redirect, Route ,Switch} from "react-router-dom";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/adminLogin" />
      }
      /> 
  ); 
}
export default PrivateRoute;