import React from "react";
// import PropTypes from "prop-types";

function Button(props) {
  const clickButton = () => {
    console.log("You clicked me!");
  };

  return (
    <button onClick={() => clickButton()} type="button">
      {props.varName}
    </button>
  );
}

export default Button;
