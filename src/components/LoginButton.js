import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Bienvenido </h1>
      <button onClick={() => loginWithRedirect()}>login</button>
    </div>
  );
};

export default LoginButton;
