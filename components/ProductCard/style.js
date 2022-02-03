// * node_modules
import styled from "styled-components";

// * Components
export const Card = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto;
  display: flex;
  border-radius: 15px;
`;

export const ImageWRapper = styled.div`
  width: 35%;
  background-color: #35d366;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const DetailsWrapper = styled.div`
  width: 65%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`;
