import React, {useState} from "react";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";
import {_userInfoError, _userInfoSuccess} from "../../redux/selectors";
import {setNewPasswordActions} from "../../redux/actions";

import {Flex, Button, DefaultInput} from "..";
import {navigate} from "@reach/router";
import iconCross from "../../icons/Cross.svg";
import {GET_EMAIL_TOKEN_FROM_URL} from "../../helpers";

// import {inputHandler, blurHandler} from "../../helpers/ValidationInput";

const StyledSideFormIconExit = styled.span`
  background: url(${iconCross}) no-repeat;
  background-size: 100%;
  width: 35px;
  height: 35px;
`;

const StyledSideForm = styled.div`
  height: ${({height}) => height || "495px"};
  width: ${({width}) => width || "914px"};
  background-color: #5063ee;
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  border-radius: 39px;
  z-index: 1;
`;

const StyledSideFormTitle = styled.div`
  font-family: "Gilroy";
  font-size: ${({fontSize}) => fontSize || "40px"};
  font-style: normal;
  font-weight: 400;
`;

const StyledSideFormDescription = styled.div`
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: ${({margin}) => margin || "28px 0px 28px 0px"};
`;

const InnerForm = (props) => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [newPasswordDirty, setNewPasswordDirty] = useState("");
  const [newPasswordError, setNewPasswordError] = useState(
    "Новый пароль не может быть пустым"
  );

  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "Поле для повтора пароля не может быть пустым"
  );

  // const [oldPasswordDirty, setOldPasswordDirty] = useState("");
  // const [oldPasswordError, setOldPasswordError] = useState(
  //   "Старый пароль не может быть пустым"
  // );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "new-password":
        setNewPasswordDirty(true);

        break;
      case "confirm-password":
        setConfirmPasswordDirty(true);

        break;
        // case "old-password":
        //   setOldPasswordDirty(true);

        break;
      default:
        break;
    }
  };

  const inputHandler = (e, type) => {
    let regExpPassword = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    const stateInput = {
      "new-password": setNewPassword,
      "confirm-password": setConfirmPassword,
      // "old-password": setOldPassword,
    };
    const stateInputError = {
      "new-password": setNewPasswordError,
      "confirm-password": setConfirmPasswordError,
      // "old-password": setOldPasswordError,
    };

    stateInput[type](e.target.value);

    // console.log("test:", {
    //   newPassword: newPassword,
    //   confirmPassword: confirmPassword,
    // });

    if (!regExpPassword.test(String(e.target.value))) {
      stateInputError[type]("enter valid password");
    } else {
      stateInputError[type]("");
    }
    if (e.target.value === "") {
      stateInputError[type]("Пароль не может быть пустым");
    }
    // if (newPassword !== confirmPassword) {
    //   stateInputError[type]("Пароли не совпадают");
    // }
  };

  const handleRoute = () => {
    switch (props.type) {
      case "change-password":
        if (newPassword === confirmPassword) {
          dispatch(setNewPasswordActions(GET_EMAIL_TOKEN_FROM_URL, newPassword));
        } else {
          setNewPasswordError("Пароли не совпадают");
          setConfirmPasswordError("Пароли не совпадают");
        }
        break;

      default:
        navigate(props.route);
        break;
    }
  };

  return (
    <StyledSideForm padding={props.padding} width={props.width} height={props.height}>
      <Flex direction="column" justify="center" align={props.align}>
        {props.type === "change-password" ? (
          <Flex
            direction="column"
            justify="center"
            align="start"
            width={props.widthContainer}>
            <StyledSideFormTitle>{props.title}</StyledSideFormTitle>
            <StyledSideFormDescription margin={props.description.margin}>
              <span>{props.description.firstText}</span>
            </StyledSideFormDescription>
            <Flex
              direction="row"
              justify="center"
              align="start"
              margin="9px 0px 54px 0px">
              <DefaultInput
                route="change-password"
                id="new-password"
                // patternInput={patternInput}
                required
                type="password"
                name="new-password"
                // placeholder="Email"
                for="new-password"
                inputDirty={newPasswordDirty}
                inputError={newPasswordError}
                handleBlurChange={blurHandler}
                handleChange={inputHandler}
                inputValue={newPassword}
                marginInput="0px 35px 0px 0px"
                color="#eeeeee"
              />
              <DefaultInput
                route="change-password"
                id="confirm-password"
                // patternInput={patternInput}
                required
                type="password"
                name="confirm-password"
                placeholder="Confirm new password"
                for="confirm-password"
                inputDirty={confirmPasswordDirty}
                inputError={confirmPasswordError}
                handleBlurChange={blurHandler}
                handleChange={inputHandler}
                inputValue={confirmPassword}
                marginInput="0px 0px 0px 0px"
                color="#eeeeee"
              />
            </Flex>
            <Flex direction="row" justify="space-between" align="start" width="100%">
              <div></div>
              <Button
                handleClick={handleRoute}
                type="button"
                width="300px"
                height="37px"
                nameButton={props.button}
                borderColor="none"
                backgroundColor="#2C353D"
                color="white"
                fontSizeButton="16px"
              />
            </Flex>
          </Flex>
        ) : props.type === "successful-password-change" ? (
          <Flex direction="row" justify="space-between" align="center">
            <StyledSideFormTitle fontSize={props.fontSizeTitle}>
              {props.title}
            </StyledSideFormTitle>
            <StyledSideFormIconExit></StyledSideFormIconExit>
          </Flex>
        ) : (
          <Flex
            direction="column"
            justify="center"
            align="start"
            width={props.widthContainer}
            height={props.height}>
            <StyledSideFormTitle fontSize={props.fontSizeTitle}>
              {props.title}
            </StyledSideFormTitle>
            <StyledSideFormDescription margin={props.description.margin}>
              <span>{props.description.firstText}</span>
              <br />
              <span>{props.description.secondText}</span>
            </StyledSideFormDescription>
            {props.button && (
              <Button
                handleClick={handleRoute}
                type="button"
                height="42px"
                width={props.widthButton}
                nameButton={props.button}
                borderColor="#2C353D"
                color="#2C353D"
                fontSizeButton={props.fontSizeButton}
              />
            )}
          </Flex>
        )}
      </Flex>
    </StyledSideForm>
  );
};
export {InnerForm};
