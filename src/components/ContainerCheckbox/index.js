import React from "react";
import styled from "styled-components";
import {Flex, Checkbox} from "../../components";

const StyledContainerLink = styled.a`
  color: #5063ee;
  user-select: none;
`;

const ContainerCheckbox = (props) => {
  return (
    <Flex
      direction="row"
      justify={props.addedLink ? "space-between" : "start"}
      align="center"
      margin="21px 0px 35px 0px"
      width="300px">
      <Checkbox type="checkbox" id="checkbox" />
      {/* <StyledContainerLabel for="checkbox">Запомнить меня</StyledContainerLabel> */}
      {props.addedLink ? (
        <StyledContainerLink onClick={props.handleRoute}>
          Forget password?
        </StyledContainerLink>
      ) : (
        <></>
      )}
    </Flex>
  );
};
export {ContainerCheckbox};
