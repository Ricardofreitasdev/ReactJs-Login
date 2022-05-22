import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { AnimatePresence } from "framer-motion";
import NoMatch from "../pages/NoMatch/NoMatch";
import useUserContext from "../hooks/useUserContext";

export default function Routes() {
  const { token } = useUserContext();
  const location = useLocation();

  const RoutesPrivate = function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          token ? <Component {...rest} /> : <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <RoutesPrivate path="/admin" component={Admin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/404" component={NoMatch} />

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
