import {handleActions} from "redux-actions";
import * as actions from "../actions";
import {USER_INFO_AUTH_TOKEN} from "../../helpers";

const defaultState = {
  loading: false,
  userInfoError: [],
  userInfoSuccess: null,
  isAuth: false,
};

export const authUserReducer = handleActions(
  {
    [actions.registerUserRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.registerUserRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.registerUserSuccess](state, {payload}) {
      return {
        ...state,
        userInfoSuccess: payload,
        isAuth: true,
      };
    },
    [actions.registerUserError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.loginUserRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.loginUserRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.loginUserSuccess](state, {payload}) {
      return {
        ...state,
        userInfoSuccess: payload,
        isAuth: true,
      };
    },
    [actions.loginUserError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.confirmUserRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.confirmUserRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.confirmUserSuccess](state, {payload}) {
      return {
        ...state,
        userInfoSuccess: payload,
      };
    },
    [actions.confirmUserError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
    [actions.sendEmailConfirmationRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.sendEmailConfirmationRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.sendEmailConfirmationSuccess](state, {payload}) {
      return {
        ...state,
        userInfoSuccess: payload,
      };
    },
    [actions.sendEmailConfirmationError](state, {payload}) {
      return {
        ...state,
        userInfoError: payload,
      };
    },
  },
  defaultState
);
