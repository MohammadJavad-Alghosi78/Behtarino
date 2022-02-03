// * node_modules
import React from "react";

// * Styles
import { ButtonRoot } from "./style";

// * Component
const Button = ({ variant, textColor, children }) => {
  return (
    <ButtonRoot variant={variant} textColor={textColor}>
      {children}
    </ButtonRoot>
  );
};

// * Export component
export default Button;
