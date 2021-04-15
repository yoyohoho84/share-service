import {handleActions} from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  loading: false,
  userInfoError: [],
  userInfoSuccess: null,
};

export const confirmEmailReducer = handleActions(
  {
    [actions.recoveryPasswordUserRequest](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.recoveryPasswordUserSuccess](state, {payload}) {
      return {
        ...state,
        userInfoSuccess: payload,
      };
    },
    [actions.recoveryPasswordUserError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.recoveryPasswordUserComplete](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
  },
  defaultState
);
