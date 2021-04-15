import React from "react";
import styled from "styled-components";
import {Flex} from "../../components";

const StyledDefaultInput = styled.input`
  height: 40px;
  width: 300px;
  // TODO: Не работает проверка на inputError чтобы изменялся цвет border
  border: ${({inputError}) => (inputError ? "2px solid red" : "1px solid #c6c6c6")};
  background-color: inherit;
  border-radius: 4px;
  margin: ${({margin}) => margin || "0px 0px 20px 0px"};
  padding: 12px 0px 11px 14px;
  color: #c6c6c6;
  ::-webkit-input-placeholder {
    font-size: 16px;
    color: ${({color}) => color || "#c6c6c6"};
  }
`;

const StyledDefaultLabel = styled.label`
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || "auto"};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: red;
  margin-bottom: 3px;
  /* &${StyledDefaultInput} + &:invalid {
    color: red;
  }
  &${StyledDefaultInput} + &:valid {
    color: green;
  } */
`;

const DefaultInput = (props) => {
  return (
    <>
      {props.route === "change-password" ? (
        <Flex direction="column" justify="center" align="start">
          {props.inputDirty && props.inputError ? (
            <StyledDefaultLabel width="auto" height="18px">
              {props.inputError}
            </StyledDefaultLabel>
          ) : (
            <StyledDefaultLabel width="auto" height="18px"></StyledDefaultLabel>
          )}
          <StyledDefaultInput
            value={props.inputValue}
            onChange={(e) => props.handleChange(e, props.name)}
            onBlur={(e) => props.handleBlurChange(e)}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            margin={props.marginInput}
            color={props.color}></StyledDefaultInput>
        </Flex>
      ) : (
        <>
          {props.inputDirty && props.inputError && (
            <StyledDefaultLabel>{props.inputError}</StyledDefaultLabel>
          )}
          <StyledDefaultInput
            value={props.inputValue}
            onChange={(e) => props.handleChange(e, props.name)}
            onBlur={(e) => props.handleBlurChange(e)}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            defaultValue={props.defaultValue}
            margin={props.marginInput}
            color={props.color}></StyledDefaultInput>
        </>
      )}
    </>
  );
};
export {DefaultInput};
