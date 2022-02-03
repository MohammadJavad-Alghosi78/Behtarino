// * node_modules
import styled, { css } from "styled-components";

// * Handlers
const detectVariant = (variant) => {
  const cssObjMap = {
    primary: () => css`
      background-color: red;
      width: 330px;
      height: 48px;
      box-shadow: 0px 0px 8px 3px rgba(255, 24, 24, 0.43);
    `,
  };

  return cssObjMap[variant];
};

// * Components
export const ButtonRoot = styled.button`
  cursor: pointer;
  border-radius: 15px;
  outline: 0;
  border: 0;
  padding: 4px 0;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ textColor }) => "green"};
  ${({ variant }) => detectVariant(variant)};
`;
