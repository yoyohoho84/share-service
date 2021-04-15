import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: ${({height}) => height || "42px"};
  width: ${({width}) => width || "235px"};
  margin: ${({margin}) => margin || "0px"};
  background: ${({background}) => `url(${background}) no-repeat` || null};
  background-color: ${({backgroundColor}) => backgroundColor || null};
  background-size: ${({backgroundSize}) => backgroundSize || "100%"};
  border-color: ${({borderColor}) => borderColor || "#EEEEEE"};
  border-radius: 5px;
  outline: none;
  color: ${({color}) => color || "white"};
  font-size: ${({fontSizeButton}) => fontSizeButton || "20px"};
`;

const Button = (props) => {
  return (
    <StyledButton onClick={props.handleClick} {...props}>
      {props.nameButton}
    </StyledButton>
  );
};
export {Button};
