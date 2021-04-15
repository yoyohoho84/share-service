import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  flex-grow: ${(props) => props.grow || null};
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  height: ${({height}) => height || "auto"};
  width: ${({width}) => width || "auto"};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};
export {Flex};
