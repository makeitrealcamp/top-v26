import React from "react";
import "./header.scss";

const Header = (props) => {
  const { children } = props;
  return <div className="header">{children}</div>;
};

export default Header;
