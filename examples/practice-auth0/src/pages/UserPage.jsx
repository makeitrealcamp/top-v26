import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthButton } from "../components";

export default function UserPage(props) {
  const { logout, isAuthenticated, user } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) return <h1>Not allowed!!</h1>;

  return (
    <>
      <h3>USER: {user.name}</h3>
      <img src={user.picture} /> <br />
      <AuthButton textButton="Logout" handleClick={handleLogout} />
    </>
  );
}
