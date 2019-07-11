import React from "react";
import { Switch, Route } from "react-router-dom";
//import ProtectedRoute from "./ProtectedRoute";
import Home from "../components/menu/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
  );
}
