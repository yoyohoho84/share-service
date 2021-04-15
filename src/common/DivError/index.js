import styled from "styled-components";

const StyledDivError = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  height: ${({height}) => height || "auto"};
  width: ${({width}) => width || "auto"};
  color: ${({color}) => color || "red"};
`;

const DivError = (props) => {
  return <StyledDivError {...props} />;
};
export {DivError};
