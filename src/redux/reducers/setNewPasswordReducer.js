import {handleActions} from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  loading: false,
  userInfoError: [],
  userInfoSuccess: null,
};

export const setNewPasswordReducer = handleActions(
  {
    [actions.setNewPasswordUserRequest](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.setNewPasswordUserSuccess](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.setNewPasswordUserError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.setNewPasswordUserComplete](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
  },
  defaultState
);
