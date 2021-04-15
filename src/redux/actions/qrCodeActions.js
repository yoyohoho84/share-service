import API from "../../api";
import {createAction} from "redux-actions";
import {navigate} from "@reach/router";

export const qrCodeRequest = createAction("QR_CODE_REQUEST");
export const qrCodeComplete = createAction("QR_CODE_COMPLETE");
export const qrCodeSuccess = createAction("QR_CODE_SUCCESS");
export const qrCodeError = createAction("QR_CODE_ERROR");

export const qrCodeActions = (urlForQrCode) => {
  return (dispatch) => {
    dispatch(qrCodeRequest());

    API.qrCode
      .getQrCode(urlForQrCode)
      .then((response) => {
        console.log("qrCodeActions response", response);
        dispatch(qrCodeSuccess(response.data));
      })
      .catch((error) => {
        console.log("qrCodeActions catch", error);
      })
      .finally(() => {
        dispatch(qrCodeComplete());
      });
  };
};
