import React from "react";

import Login from "../pages/Login";
import Logout from  "../pages/Logout";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Logout /> : <Login />;
};

export default AuthenticationButton;
