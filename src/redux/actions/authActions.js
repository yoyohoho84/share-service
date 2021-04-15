import API from "../../api";
import {createAction} from "redux-actions";
import {navigate} from "@reach/router";
// register LOGIN
export const registerUserRequest = createAction("REGISTER_USER_REQUEST");
export const registerUserRequestComplete = createAction("REGISTER_USER_REQUEST_COMPLETE");
export const registerUserSuccess = createAction("REGISTER_USER_SUCCESS");
export const registerUserError = createAction("REGISTER_USER_ERROR");
// login LOGIN
export const loginUserRequest = createAction("LOGIN_USER_REQUEST");
export const loginUserRequestComplete = createAction("LOGIN_USER_REQUEST_COMPLETE");
export const loginUserSuccess = createAction("LOGIN_USER_SUCCESS");
export const loginUserError = createAction("LOGIN_USER_ERROR");
// // confirm CONFIRM
export const confirmUserRequest = createAction("CONFIRM_USER_REQUEST");
export const confirmUserRequestComplete = createAction("CONFIRM_USER_REQUEST_COMPLETE");
export const confirmUserSuccess = createAction("CONFIRM_USER_SUCCESS");
export const confirmUserError = createAction("CONFIRM_USER_ERROR");
// // confirm SEND_EMAIL_CONFIRMATION
export const sendEmailConfirmationRequest = createAction(
  "SEND_EMAIL_CONFIRMATION_REQUEST"
);
export const sendEmailConfirmationRequestComplete = createAction(
  "SEND_EMAIL_CONFIRMATION_REQUEST_COMPLETE"
);
export const sendEmailConfirmationSuccess = createAction(
  "SEND_EMAIL_CONFIRMATION_SUCCESS"
);
export const sendEmailConfirmationError = createAction("SEND_EMAIL_CONFIRMATION_ERROR");

export const registerUser = (email, password) => {
  return (dispatch) => {
    dispatch(registerUserRequest());

    API.auth
      .register(email, password)
      .then((response) => {
        dispatch(registerUserSuccess(response.data));
        dispatch(sendEmailConfirmationRequest());
        API.auth
          .sendEmailConfirmation(response.data.auth_token)
          .then((res) => {
            dispatch(sendEmailConfirmationSuccess(res.data));
          })
          .catch((err) => {
            if (err.response) {
              dispatch(sendEmailConfirmationError(err.data));
            }
          })
          .finally(() => {
            dispatch(sendEmailConfirmationRequestComplete());
          });
        // добавляем данные о пользователе в localStorage
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        // перенаправляем на страницу успешной регистрации
        navigate("/successful-auth");
        // перенаправляем на страницу профиля
        setTimeout(() => {
          navigate("/goal-page");
        }, 3000);
      })
      .catch((error) => {
        // если сервер упал, показываем статичную ошибку
        if (error.response) {
          dispatch(registerUserError(error.response.data));
        } else {
          dispatch(registerUserError(["Server ERROR"]));
        }
        console.log("registerUser catch", error);
      })
      .finally(() => {
        dispatch(registerUserRequestComplete());
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginUserRequest());
    API.auth
      .login(email, password)
      .then((response) => {
        console.log("loginUser response", response);
        dispatch(loginUserSuccess(response.data));
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        // перенаправляем на страницу профиля
        navigate("/goal-page");
      })
      .catch((error) => {
        if (error.response) {
          console.log("error.response.detail:", error.response.data.detail);
          if (error.response.data.detail === "Invalid token.") {
            dispatch(loginUserError(["Invalid token."]));
          } else {
            dispatch(loginUserError(error.response.data));
          }
        }

        console.log("loginUser catch", error);
      })
      .finally(() => {
        dispatch(loginUserRequestComplete());
      });
  };
};

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(confirmUserRequest());

    API.auth
      .forgotPassword(email)
      .then((response) => {
        console.log("forgotPassword response", response);
        // dispatch(confirmUserSuccess(response.data));
        // обновляем данные о пользователе в localStorage
        // localStorage.setItem("userInfo", JSON.stringify(response.data));
        // перенаправляем на
        navigate("/feedback-recover-pass");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        if (error.response) {
          dispatch(confirmUserError(error.response.data));
        } else {
          dispatch(confirmUserError(["Server ERROR"]));
        }

        console.log("forgotPassword catch", error);
      })
      .finally(() => {
        dispatch(confirmUserRequestComplete());
      });
  };
};
