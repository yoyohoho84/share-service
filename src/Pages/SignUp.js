import React from "react";
import {UniversalForm, InnerForm, Flex, OuterForm} from "../components";

const SignUp = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <OuterForm margin="0px 350px 0px 0px" padding="0px 90px 15px 88px">
        <UniversalForm
          type="sign-up"
          title="Create account"
          nameButton="Sign up"
          route="/successful-auth"
        />
      </OuterForm>

      <Flex direction="column" justify="center" align="start" padding="0px">
        <InnerForm
          route="/sign-in"
          align="flex-end"
          padding="138px 74px 0px 0px"
          widthContainer="245px"
          title="Hello, Friend!"
          description={{
            firstText: "let’s find some like-minded people.",
            secondText: "If you already had an account please sign in.",
          }}
          button="Sign in"
        />
      </Flex>
    </Flex>
  );
};
export {SignUp};
