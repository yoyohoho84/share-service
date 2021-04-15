import {useEffect, useRef} from "react";
import {Flex} from "../../../../../../../../common/Flex";
import {ProfileButtonStyled} from "../ProfileButtonStyled";
import {PopupWindowContentStyled, PopupWindowStyled} from "./PopupWindowStyled";
import {navigate, Router} from "@reach/router";

export const SignOutPopupWindow = (props) => {
  const popupRef = useRef();
  let handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current)) {
      props.setSignOutViewPopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  });

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <PopupWindowStyled>
      <PopupWindowContentStyled ref={popupRef}>
        <h1>Sign Out</h1>
        <Flex justify="center" margin="0 0 17px 0">
          <ProfileButtonStyled width={"432px"} onClick={signOut}>
            Yes
          </ProfileButtonStyled>
        </Flex>
        <Flex justify="center">
          <ProfileButtonStyled
            onClick={(event) => {
              props.setSignOutViewPopup(false);
              event.stopPropagation();
            }}
            width={"432px"}>
            Cancel
          </ProfileButtonStyled>
        </Flex>
      </PopupWindowContentStyled>
    </PopupWindowStyled>
  );
};
