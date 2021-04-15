import React from "react";
import styled from "styled-components";

const StyledCheckboxSpanFake = styled.span`
  display: inline-block;
  border-radius: 4px;
  width: 14px;
  height: 14px;
  border: 1px solid black;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 14px;
    height: 14px;
    background-color: green;
    opacity: 0;
    transition: 0.2s;
  }
`;

const StyledCheckboxInput = styled.input`
  display: none;
  &:checked + ${StyledCheckboxSpanFake}::before {
    opacity: 1;
    border-radius: 4px;
    width: 13px;
    height: 13px;
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;

const StyledCheckboxSpan = styled.span`
  margin: 0px 0px 0px 8px;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
`;

const Checkbox = (props) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckboxInput {...props}></StyledCheckboxInput>
      <StyledCheckboxSpanFake></StyledCheckboxSpanFake>
      <StyledCheckboxSpan>Запомнить меня</StyledCheckboxSpan>
    </StyledCheckboxLabel>
  );
};
export {Checkbox};
