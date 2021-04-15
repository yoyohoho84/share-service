import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import closePopup from "../../../../../../../../assets/svg/closePopup.svg";
import {ProfileButtonStyled} from "../ProfileButtonStyled";
import {PopupWindowContentStyled, PopupWindowStyled} from "./PopupWindowStyled";

const ChangePasswordPopupStyled = styled.div`
  width: 300px;
  margin: 0 auto;
  position: relative;
  img {
    top: -110px;
    right: -110px;
    cursor: pointer;
    position: absolute;
  }
`;

const FormGroupStyled = styled.div`
  position: relative;
  margin-bottom: 30px;
  label {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
    transition: 0.5s;
    font-size: 16px;
    color: #c6c6c6;
    ${(props) => props.inputIsActive && "transform: translate(-5%, -165%)"}
  }

  input {
    position: relative;
    background-color: inherit;
    font-size: 16px;
    border: 1px solid #c6c6c6;
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    color: #eeeeee;
    padding: 14px 13px;
    margin-bottom: 19px;
  }
`;

export const ChangePasswordPopup = React.memo((props) => {
  // const [oldPassInputIsActive, setOldPassInputIsActive] = useState(false);
  const [newPassInputIsActive, setNewPassInputIsActive] = useState(false);
  const [againNewPassInputIsActive, setAgainNewPassInputIsActive] = useState(false);
  const popupRef = useRef();
  let handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current)) {
      props.setChangePasswordPopupView(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  });

  const inputValueHandler = (e) => {
    let inputValue = e.target.value;
    if (inputValue === "") {
      switch (e.target.id) {
        // case "oldPassword":
        //   setOldPassInputIsActive(false);
        //   break;
        case "newPassword":
          setNewPassInputIsActive(false);
          break;
        case "againNewPassword":
          setAgainNewPassInputIsActive(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <PopupWindowStyled>
      <PopupWindowContentStyled ref={popupRef}>
        <h1>Change password</h1>
        <ChangePasswordPopupStyled>
          <img
            src={closePopup}
            onClick={(event) => {
              props.setChangePasswordPopupView(false);
              event.stopPropagation();
            }}
            alt=""
          />
          {/* <FormGroupStyled inputIsActive={oldPassInputIsActive}>
            <label htmlFor="oldPassword">Старый пароль</label>
            <input
              id="oldPassword"
              type="password"
              onFocus={() => setOldPassInputIsActive(true)}
              onBlur={inputValueHandler}
            />
          </FormGroupStyled> */}
          <FormGroupStyled inputIsActive={newPassInputIsActive}>
            <label htmlFor="newPassword">Новый пароль</label>
            <input
              id="newPassword"
              type="password"
              onFocus={() => setNewPassInputIsActive(true)}
              onBlur={inputValueHandler}
            />
          </FormGroupStyled>
          <FormGroupStyled inputIsActive={againNewPassInputIsActive}>
            <label htmlFor="againNewPassword">Еще раз новый пароль</label>
            <input
              id="againNewPassword"
              type="password"
              onFocus={() => setAgainNewPassInputIsActive(true)}
              onBlur={inputValueHandler}
            />
          </FormGroupStyled>
          <ProfileButtonStyled width="300px">Change my password</ProfileButtonStyled>
        </ChangePasswordPopupStyled>
      </PopupWindowContentStyled>
    </PopupWindowStyled>
  );
});
