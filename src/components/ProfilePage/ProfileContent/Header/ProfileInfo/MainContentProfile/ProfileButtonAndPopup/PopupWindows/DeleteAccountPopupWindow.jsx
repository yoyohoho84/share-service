import {useEffect, useRef} from "react";
import styled from "styled-components";
import {Flex} from "../../../../../../../../common/Flex";
import {ProfileButtonStyled} from "../ProfileButtonStyled";
import {PopupWindowContentStyled, PopupWindowStyled} from "./PopupWindowStyled";

const DeleteAccountPopupWindowStyled = styled.div``;

export const DeleteAccountPopupWindow = (props) => {
  const popupRef = useRef();
  let handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current)) {
      props.setDeleteAccountPopupView(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <PopupWindowStyled>
      <PopupWindowContentStyled ref={popupRef}>
        <h1>Delete your account?</h1>
        <DeleteAccountPopupWindowStyled>
          <Flex justify="center" margin="0 0 17px 0">
            <ProfileButtonStyled width={"432px"}>Yes</ProfileButtonStyled>
          </Flex>
          <Flex justify="center">
            <ProfileButtonStyled
              onClick={(event) => {
                props.setDeleteAccountPopupView(false);
                event.stopPropagation();
              }}
              width={"432px"}>
              Cancel
            </ProfileButtonStyled>
          </Flex>
        </DeleteAccountPopupWindowStyled>
      </PopupWindowContentStyled>
    </PopupWindowStyled>
  );
};
