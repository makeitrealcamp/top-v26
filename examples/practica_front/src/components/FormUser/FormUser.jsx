import React from "react";
import { Button, Form, Input } from "antd";

export default function FormUser({
  onFinish,
  onFinishFailed,
  buttonText,
  children,
}) {
  return (
    <>
      <Form
        name="basic"
        style={{
          maxWidth: 600,
          border: "1px solid #242424",
          borderRadius: "1rem",
          padding: "2rem 1rem 0 1rem",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {children && <Form.Item>{children}</Form.Item>}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
