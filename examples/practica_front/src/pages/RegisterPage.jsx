import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectUserState } from "../redux-toolkit/slices/userSlice";
import { FormRegister } from "../components/FormRegister";

export default function RegisterPage(props) {
  const { user, error, loading } = selectUserState();

  const handleRegister = (values) => {
    console.log("[RegisterPage: handleRegister]", values);
  };

  return (
    <>
      <FormRegister onFinish={handleRegister} />s
    </>
  );
}
