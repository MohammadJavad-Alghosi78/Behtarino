// * node_modules
import styled, { css } from "styled-components";

// * Handlers
const detectVariant = (variant) => {
  const cssObjMap = {
    title: () => css`
      font-size: 18px;
      font-weight: bold;
    `,
    large: () => css`
      font-size: 16px;
      font-weight: bold;
    `,
    medium: () => css`
      font-size: 14px;
      font-weight: normal;
    `,
    small: () => css`
      font-size: 12px;
      font-weight: 300; ;
    `,
  };
  return cssObjMap[variant];
};

// * Components
export const TypographyRoot = styled.span`
  display: ${({ display }) => display ?? "block"};
  color: ${({ color }) => color ?? "black"};
  ${({ variant }) => detectVariant(variant)};
`;
