import React from "react";
import {UniversalForm, InnerForm, Flex, OuterForm} from "../components";

const SignIn = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <OuterForm margin="0px -357px 0px 0px" padding="38px 87px 41px 87px">
        <UniversalForm
          type="sign-in"
          title="Let’s make a party tonight."
          nameButton="Sign in"
          addedLink={true}
          route="recover-password"
        />
      </OuterForm>

      <Flex
        direction="column"
        justify="center"
        align="flex-start"
        padding="0px 0px 0px 0px">
        <InnerForm
          route="/"
          align="flex-start"
          padding="157px 0px 0px 54px"
          widthContainer="285px"
          title="Welcome back!"
          description={{
            firstText: "To keep connected with us please",
            secondText: "login with your personal info.",
          }}
          button="Sign up"
          widthButton="285px"
        />
      </Flex>
    </Flex>
  );
};
export {SignIn};
