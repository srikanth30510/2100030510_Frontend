
import React from "react";

const CapitalizePipe = ({ text }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <span>{capitalize(text)}</span>;
};

export default CapitalizePipe;
