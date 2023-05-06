import React, { FC, useState } from "react";
import { LoginProps, IFormData } from "../types";

const Login: FC<LoginProps> = ({ label1, label2 }: LoginProps) => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    email: "",
  });

  const { username, email } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form>
      <label>{label1}:</label>
      <input name="username" value={username} onChange={handleChange}></input>
      <label>{label2}:</label>
      <input name="email" value={email} onChange={handleChange}></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
