import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserState } from "../redux-toolkit/slices/userSlice";

export default function HomePage(props) {
  const { token } = useSelector(selectUserState);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/notes");
    } else {
      navigate("/auth");
    }
  }, []);

  return <></>;
}
