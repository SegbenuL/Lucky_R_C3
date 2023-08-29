import React from "react";
import PropTypes from "prop-types";

function Buttons(props) {
  return (
    <div>
      <button className="login">Log In</button>
      <button className="Signin">Sign In </button>
    </div>
  );
}

Buttons.propTypes = {};

export default Buttons;
