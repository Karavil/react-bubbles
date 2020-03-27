import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
   return (
      <div className="App">
         <Route exact path="/">
            <Login />
         </Route>
         <PrivateRoute exact path="/bubbles">
            <BubblePage />
         </PrivateRoute>
      </div>
   );
}

export default App;
