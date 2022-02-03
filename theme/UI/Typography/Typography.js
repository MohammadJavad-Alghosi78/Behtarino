// * node_modules
import React from "react";

// * Styles
import { TypographyRoot } from "./style";

// * Component
const Typography = ({ variant, color, children }) => {
  return (
    <TypographyRoot variant={variant} color={color}>
      {children}
    </TypographyRoot>
  );
};

// * Export Component
export default Typography;
