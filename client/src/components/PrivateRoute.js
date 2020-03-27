import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function PrivateRoute({ children, ...rest }) {
   return (
      <Route
         {...rest}
         render={({ location }) =>
            JSON.parse(localStorage.getItem("token")) ===
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98" ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/",
                     state: { from: location }
                  }}
               />
            )
         }
      />
   );
}
