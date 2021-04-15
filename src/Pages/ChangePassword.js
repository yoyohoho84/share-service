import React from "react";
import {InnerForm, Flex} from "../components";

const ChangePassword = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Flex direction="column" justify="center" align="center" padding="0px 0px 0px 0px">
        <InnerForm
          type="change-password"
          route="/successful-password-change"
          align="flex-start"
          padding="110px 0px 0px 80px"
          width="800px"
          height="425px"
          title="Enter new password"
          description={{
            firstText: "New password",
            margin: "35px 0px 0px 0px",
          }}
          button="Change my password"
          heightButton="37px"
        />
      </Flex>
    </Flex>
  );
};
export {ChangePassword};
