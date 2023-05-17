import React, { useEffect, useState } from "react";
import { AuthButton } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    isAuthenticated && navigate("/user");
  }, [isAuthenticated]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <>
      <AuthButton textButton="Login" handleClick={handleLogin} />
    </>
  );
}
