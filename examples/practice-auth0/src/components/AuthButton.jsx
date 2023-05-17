import React from "react";
import PropTypes from "prop-types";

function AuthButton({ handleClick, textButton }) {
  return (
    <>
      <button onClick={handleClick}>{textButton}</button>
    </>
  );
}

AuthButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  textButton: PropTypes.string,
};

AuthButton.defaultProps = {
  handleClick: () => {},
  textButton: "default text",
};

export default AuthButton;
