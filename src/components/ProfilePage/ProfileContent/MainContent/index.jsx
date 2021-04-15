import React from "react";
import styled from "styled-components";

const MainContentStyled = styled.div`
  border: 1px solid red;
  border-radius: 20px;
  padding: 20px;
  background-color: #2d9cdb;
  opacity: 0.1;
`;

export const MainContent = () => {
  return <MainContentStyled></MainContentStyled>;
};
