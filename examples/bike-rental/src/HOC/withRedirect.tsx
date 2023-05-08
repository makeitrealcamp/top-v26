import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const withRedirect = (Component: FC<Props>) => (props: any) => {
  const navigate = useNavigate();

  const redirect = (id: string) => {
    navigate(`/bike/${id}`);
  };

  return <Component {...props} redirect={redirect} />;
};

export default withRedirect;
