import React from "react";
import {InnerForm, Flex} from "../components";

const SuccessfulPassChange = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Flex direction="column" justify="center" align="start" padding="0px">
        <InnerForm
          type="successful-password-change"
          route="/"
          padding="54px 81.5px 0px 80px"
          height="137px"
          width="705px"
          title="Successfuly changed your password !"
          fontSizeTitle="25px"
          description={{
            firstText: "",
            margin: "0px",
          }}
        />
      </Flex>
    </Flex>
  );
};
export {SuccessfulPassChange};
