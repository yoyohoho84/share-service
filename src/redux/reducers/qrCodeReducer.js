import {handleActions} from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  loading: false,
  qrCodeInfo: null,
  qrCodeError: null,
};

export const qrCodeReducer = handleActions(
  {
    [actions.qrCodeRequest](state, {payload}) {
      return {
        ...state,
        qrCodeError: payload,
      };
    },
    [actions.qrCodeSuccess](state, {payload}) {
      return {
        ...state,
        qrCodeInfo: payload,
      };
    },
    [actions.qrCodeError](state, {payload}) {
      return {
        ...state,
        qrCodeError: payload,
      };
    },
    [actions.qrCodeComplete](state, {payload}) {
      return {
        ...state,
        qrCodeError: payload,
      };
    },
  },
  defaultState
);
