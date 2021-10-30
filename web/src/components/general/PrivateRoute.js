import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../utils/Spinner";

const PrivateRoute = props => {
  const { loading, isAuthenticated } = useSelector(state => state.user);

  if (loading) {
    return <Spinner />;
  } else if (isAuthenticated) {
    return <Route {...props} />;
  }

  // If unauthenticated, redirect user to home page
  return <Redirect to="/signin" />;
};

export default PrivateRoute;
