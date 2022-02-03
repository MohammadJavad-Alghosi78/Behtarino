// * node_modules
import React from "react";

// * Styles
import { ContainerRoot } from "./style";

// Component
const Container = ({ children }) => {
  return <ContainerRoot>{children}</ContainerRoot>;
};

// * Export Component
export default Container;
