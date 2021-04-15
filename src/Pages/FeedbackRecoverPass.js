import React from "react";
// import styled from "styled-components";
import {InnerForm, Flex, OuterForm} from "../components";
// import CheckMark from "../icons/CheckMark.svg";

// const StyledSuccessfulAuthIcon = styled.div`
//   background: url(${CheckMark}) no-repeat;
//   background-size: 100%;
//   width: 102px;
//   height: 102px;
// `;

const FeedbackRecoverPass = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <OuterForm margin="0px 671px 0px 0px" width="155px" padding="0px"></OuterForm>

      <Flex direction="column" justify="center" align="start" padding="0px">
        <InnerForm
          route="/sign-in"
          align="flex-end"
          padding="205px 120px 244px 279px"
          widthContainer="515px"
          title="We get your call."
          description={{
            firstText:
              "Instructions was sent to you email. Please, follow the instractions.",
            secondText: "",
            margin: "17.5px 0px 0px 0px",
          }}
        />
      </Flex>
    </Flex>
  );
};
export {FeedbackRecoverPass};
