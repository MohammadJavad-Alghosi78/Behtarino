// * node_modules
import React from "react";

// * Styles
import { TypographyRoot } from "./style";

// * Component
const Typography = ({ variant, color, isItalic, className, children }) => {
  return (
    <TypographyRoot
      className={className}
      variant={variant}
      color={color}
      isItalic={isItalic}
    >
      {children}
    </TypographyRoot>
  );
};

// * Export Component
export default Typography;
