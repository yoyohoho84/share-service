import React from "react";
import styled from "styled-components";
// import {UniversalForm, InnerForm, Flex} from "../components";

const StyledOuterForm = styled.div`
  height: ${({height}) => height || "100vh"};
  width: ${({width}) => width || "478px"};
  background-color: #2c353d;
  margin: ${({margin}) => margin || "0px"};
  padding: ${({padding}) => padding || "0px 90px 0px 88px"};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const OuterForm = (props) => {
  return (
    <>
      <StyledOuterForm {...props}></StyledOuterForm>
    </>
  );
};
export {OuterForm};
