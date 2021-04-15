import React from "react";
import {useEffect, useRef} from "react";
import styled from "styled-components";
import {NotificationContent} from "./NotificationContent";

const NotificationPopupStyled = styled.div`
  position: absolute;
  height: ${(props) => (props.notificationPopupView ? "370px" : "0")};
  overflow-y: auto;
  top: 100px;
  right: 112px;
  width: 409px;
  background-color: #1e252b;
  border: ${(props) => (props.notificationPopupView ? "1px solid #5063ee" : "none")};
  border-radius: 47px;
  padding: ${(props) => (props.notificationPopupView ? "40px" : "0")};
  z-index: 2;
  transition: 0.5s;
  ::-webkit-scrollbar {
    width: 0; /* ширина для вертикального скролла */
  }
`;
const NotificationPopupContentStyled = styled.div`
  max-width: 321px;
  margin: 0 auto;
`;
export const NotificationPopup = React.memo((props) => {
  const popupRef = useRef();
  let handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current)) {
      props.setNotificationPopupView(false);
      document.body.removeEventListener("click", handleOutsideClick);
    }
  };
  useEffect(() => {
    if (props.notificationPopupView) {
      document.body.addEventListener("click", handleOutsideClick);
    }
  });

  return (
    <NotificationPopupStyled {...props} ref={popupRef}>
      <NotificationPopupContentStyled>
        <NotificationContent {...props} />
      </NotificationPopupContentStyled>
    </NotificationPopupStyled>
  );
});
