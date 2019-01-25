import React from "react";
import "./SpecialButton.css";

const ClearButton = props => (
  <div className="clear-btn" onClick={props.handleClear || props.handleClick}>
    {props.children}
  </div>
);

export default ClearButton;