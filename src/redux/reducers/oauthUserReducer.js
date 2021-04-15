import {handleActions} from "redux-actions";
import * as actions from "../actions";
import {USER_INFO_AUTH_TOKEN} from "../../helpers";

const defaultState = {
  loading: false,
  oauthGoogleError: [],
  oauthGoogleInfo: null,
};

export const oauthUserReducer = handleActions(
  {
    [actions.oauthUserRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.oauthUserRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.oauthUserInfo](state, {payload}) {
      return {
        ...state,
        oauthGoogleInfo: payload,
      };
    },
    [actions.oauthError](state, {payload}) {
      return {
        ...state,
        oauthGoogleError: payload,
      };
    },
  },
  defaultState
);
