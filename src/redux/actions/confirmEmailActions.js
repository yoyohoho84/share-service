import API from "../../api";
import {createAction} from "redux-actions";
import {navigate} from "@reach/router";

export const recoveryPasswordUserRequest = createAction("RECOVERY_PASSWORD_USER_REQUEST");
export const recoveryPasswordUserComplete = createAction(
  "RECOVERY_PASSWORD_USER_COMPLETE"
);
export const recoveryPasswordUserSuccess = createAction("RECOVERY_PASSWORD_USER_SUCCESS");
export const recoveryPasswordUserError = createAction("RECOVERY_PASSWORD_USER_ERROR");

export const confirmEmailUser = (token) => {
  return (dispatch) => {
    dispatch(recoveryPasswordUserRequest());

    API.auth
      .confirmEmailUser(token)
      .then((response) => {
        console.log("confirmEmailUser token", token);
        console.log("confirmEmailUser response", response);
        // обновляем данные о пользователе в localStorage
        localStorage.setItem("confirmEmailUser", JSON.stringify(response.data));
        dispatch(recoveryPasswordUserSuccess(response.data));
        navigate("/feedback-recover-pass");
        setTimeout(() => {
          navigate("/goal-page");
        }, 3000);
      })
      .catch((error) => {
        if (error.response) {
          dispatch(recoveryPasswordUserError(error.response.data));
        } else {
          dispatch(recoveryPasswordUserError(["Server ERROR"]));
        }

        console.log("confirmEmailUser catch", error);
      })
      .finally(() => {
        dispatch(recoveryPasswordUserComplete());
      });
  };
};
