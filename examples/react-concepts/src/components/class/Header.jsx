import React from "react";

import "./header.style.css";

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <header>{this.props.children}</header>;
  }
}

export default Header;
