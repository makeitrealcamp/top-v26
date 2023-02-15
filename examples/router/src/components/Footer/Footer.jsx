import React from "react";
import "./footer.scss";

const Footer = (props) => {
  const { children } = props;
  return <div className="footer">{children}</div>;
};

export default Footer;
