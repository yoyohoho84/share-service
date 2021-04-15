import React from "react";

import {UniversalForm, InnerForm, Flex, OuterForm} from "../components";

const RecoverPassword = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <OuterForm margin="0px 0px 0px 352px" padding="12px 90px 0px 87px">
        <UniversalForm
          title="Recover password"
          nameButton="send me email instructions"
          route="/feedback-recover-pass"
          type="recover-password"
          containerWidth="301px"
        />
      </OuterForm>

      <Flex direction="column" justify="center" align="flex-start" padding="0px">
        <InnerForm
          align="flex-start"
          padding="197px 0px 0px 87px"
          widthContainer="245px"
          title="No panic!"
          description={{
            firstText: "Sometimes it happens.",
            secondText: "We will go through it together",
            margin: "12px 0px 0px 0px",
          }}
        />
      </Flex>
    </Flex>
  );
};
export {RecoverPassword};
