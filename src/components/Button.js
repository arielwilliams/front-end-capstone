import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const someFunc = () => {
    console.log("You clicked me!");
  };

  return (
    <button onClick={() => someFunc()} type="button">
      {props.varName}
    </button>
  );
}

export default Button;
