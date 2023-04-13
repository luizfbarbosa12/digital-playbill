import React from "react";
import { Glass } from "./styles";

const GlassBackground = (props) => {
  return (
    <Glass padding={props.padding} height={props.height}>
      {props.children}
    </Glass>
  );
};

export default GlassBackground;
