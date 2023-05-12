import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "antd";
import {
  selectUserState,
  authUserAsync,
} from "../redux-toolkit/slices/userSlice";
import { FormUser } from "../components/FormUser";

const { Title } = Typography;

export default function AuthPage(props) {
  const { token } = useSelector(selectUserState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleLogin = (values) => {
    /** TODO: */
    // dispatch(authUserAsync(values));

    // TODO: Validate if user is authenticated to redirect
    goToNotes();
  };

  /** TODO: redirect when user is logged */
  const goToNotes = () => {
    navigate("/notes");
  };

  return (
    <>
      <Title level={2}>Sign in</Title>
      <FormUser onFinish={handleLogin} buttonText="Sign in">
        <Link to="/register">Create an user</Link>
      </FormUser>
    </>
  );
}
