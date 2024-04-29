
import React from "react";
import "./App.css";
const HighlightTextDirective = ({ text }) => {
  return (
    <span className="highlightOnHover">{text}</span>
  );
};

export default HighlightTextDirective;
