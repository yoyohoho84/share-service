import React, {useEffect, useState} from "react";
import {navigate} from "@reach/router";
import styled from "styled-components";
import {Flex} from "../../common/Flex";
import {Button} from "../../components/Button";

const NotFoundStyled = styled.div`
  margin: 0 auto;
  background-color: #1e252b;
  position: relative;
  height: inherit;
  /* min-width: 1191px; */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundH1Styled = styled.h1`
  font-size: 10em;
  margin-bottom: 17px;
`;

const NotFoundTitleStyled = styled.div`
  font-size: 2em;
  margin-bottom: 17px;
`;

export const NotFound = () => {
  return (
    <NotFoundStyled>
      <NotFoundH1Styled>404</NotFoundH1Styled>
      <NotFoundTitleStyled>Ooops it seems ypu are lost</NotFoundTitleStyled>
      <Button
        color="white"
        nameButton="GO BACK HOME"
        fontSizeButton="15px"
        onClick={() => navigate("/")}
      />
    </NotFoundStyled>
  );
};
