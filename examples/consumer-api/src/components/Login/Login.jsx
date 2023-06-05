import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const login = async (username, passwd) => {
    const request = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        passwd,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    const { token } = data || {};

    if (token) {
      // Localstorage store
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/gestor");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.elements[0].value;
    const passwd = e.target.elements[1].value;
    login(user, passwd);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
