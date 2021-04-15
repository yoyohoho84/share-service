import {navigate} from "@reach/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Button, ContainerCheckbox, DefaultInput, DivError, Flex} from "..";
import iconGoogleAuth from "../../icons/GoogleAuth.svg";
import {loginUser, forgotPassword, registerUser, signInGoogle} from "../../redux/actions";
import {_userInfoError, _userInfoSuccess} from "../../redux/selectors";

const StyledUniversalFormTitle = styled.div`
  font-family: "Gilroy";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px 0px 44px 0px;
  width: ${({width}) => width || "auto"};
`;

const UniversalForm = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState("");
  const [passwordDirty, setPasswordDirty] = useState("");
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");

  const authInfoError = useSelector(_userInfoError);
  // информация о зарегистрированном пользователе после успешной авторизации или входа
  const userInfoSuccess = useSelector(_userInfoSuccess);

  useEffect(() => {
    console.log("authInfoError:", authInfoError);
  }, []);

  const handleRouteGoogle = () => {
    console.log("handleRouteGoogle");
    dispatch(signInGoogle());
  };

  const handleRoute = () => {
    switch (props.type) {
      case "sign-up":
        if (!emailError && !passwordError) {
          dispatch(registerUser(email, password));
        }
        break;
      case "sign-in":
        if (!emailError && !passwordError) {
          dispatch(loginUser(email, password));
        }
        break;
      case "recover-password":
        if (!emailError) {
          dispatch(forgotPassword(email));
        }
        break;

      default:
        break;
    }

    // navigate(props.route);
  };

  const handleRouteRecoverPassword = () => {
    navigate("/recover-password");
  };

  // useEffect(() => {
  //   console.log("handleRoute userInfoError", userInfoError);

  //   setEmailError(userInfoError);
  // }, [handleRoute]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);

        break;
      case "password":
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  const inputHandler = (e, type) => {
    let regExpEmail;
    let regExpPassword;
    switch (type) {
      case "email":
        regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmail(e.target.value);
        if (!regExpEmail.test(String(e.target.value).toLowerCase())) {
          setEmailError("enter valid email");
        } else {
          setEmailError("");
        }
        if (e.target.value === "") {
          setEmailError("Email не может быть пустым");
        }

        break;
      case "password":
        //  (?=.*\d) должен содержать хотя бы одну цифру
        // (?=.*[a-z]) должен содержать хотя бы один нижний регистр
        // (?=.*[A-Z]) должен содержать хотя бы один верхний регистр
        // [a-zA-Z0-9]{8,} должен содержать не менее 8 из указанных символов

        regExpPassword = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        setPassword(e.target.value);
        if (!regExpPassword.test(String(e.target.value))) {
          setPasswordError(
            `Пароль должен иметь длину не менее 8 символов и содержать хотя бы:
            1) одну цифру
            2) один нижний регистр
            3) один верхний регистр
            4) один специальный знак (!@#$%^&*...)
            `
          );
        } else {
          setPasswordError("");
        }
        if (e.target.value === "") {
          setPasswordError("Пароль не может быть пустым");
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      {props.type === "recover-password" ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          width={props.containerWidth}>
          <StyledUniversalFormTitle>{props.title}</StyledUniversalFormTitle>

          <DefaultInput
            id="email"
            // patternInput={patternInput}
            required
            type="email"
            name="email"
            placeholder="Email"
            for="email"
            inputDirty={emailDirty}
            inputError={emailError}
            handleBlurChange={blurHandler}
            handleChange={inputHandler}
            inputValue={email}
            marginBottom="18px"
          />
          <Button
            type="button"
            handleClick={handleRoute}
            nameButton={props.nameButton}
            backgroundColor="#5063ee"
            borderColor="#5063EE"
            width="300px"
            fontSizeButton="16px"
            height="37px"
          />
          <div>
            {authInfoError
              ? authInfoError.map((item, index) => {
                  return <DivError key={index}>{item}</DivError>;
                })
              : ""}
          </div>
        </Flex>
      ) : props.type === "sign-in" || props.type === "sign-up" ? (
        <Flex direction="column" justify="center" align="center">
          <StyledUniversalFormTitle>{props.title}</StyledUniversalFormTitle>
          <DefaultInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            labelFor="email"
            inputDirty={emailDirty}
            inputError={emailError}
            handleBlurChange={blurHandler}
            handleChange={inputHandler}
            inputValue={email}
          />
          <DefaultInput
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            labelFor="password"
            marginInput="0px"
            inputDirty={passwordDirty}
            inputError={passwordError}
            handleBlurChange={blurHandler}
            handleChange={inputHandler}
            inputValue={password}
          />
          <ContainerCheckbox
            addedLink={props.addedLink}
            handleRoute={handleRouteRecoverPassword}
          />
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            width="100%"
            margin="0px 0px 10px 0px">
            <Button
              type="button"
              handleClick={handleRoute}
              nameButton={props.nameButton}
              backgroundColor="#5063ee"
              borderColor="#5063EE"
            />
            <Button
              type="button"
              handleClick={handleRouteGoogle}
              height="43px"
              width="43px"
              background={iconGoogleAuth}
              borderColor="#EEEEEE"
              backgroundColor="#EEEEEE"
            />
          </Flex>
          <div>
            {authInfoError
              ? authInfoError.map((item, index) => {
                  return <DivError key={index}>{item}</DivError>;
                })
              : ""}
            {/* {authInfoError
              ? authInfoError.map((item, index) => {
                  return <DivError key={index}>{item}</DivError>;
                })
              : ""} */}
          </div>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};
export {UniversalForm};
