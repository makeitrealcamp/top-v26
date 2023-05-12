import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Space, Alert, Button } from "antd";
import {
  selectUserState,
  registerUserAsync,
} from "../redux-toolkit/slices/userSlice";
import { FormUser } from "../components/FormUser";

const { Title } = Typography;

export default function RegisterPage(props) {
  const { userRegistered, loading, error } = useSelector(selectUserState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleRegister = (values) => {
    dispatch(registerUserAsync(values));
  };

  const goToLogin = () => {
    navigate("/auth");
  };

  return (
    <>
      {userRegistered ? (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Alert
            message="Success Tips"
            type="success"
            showIcon
            action={
              <Button size="small" type="text" onClick={goToLogin}>
                Go to login
              </Button>
            }
            closable
          />
        </Space>
      ) : (
        <>
          <Title level={2}>Sign up</Title>
          <FormUser onFinish={handleRegister} buttonText="Sign up" />
        </>
      )}
    </>
  );
}
