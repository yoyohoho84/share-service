import {handleActions} from "redux-actions";
import * as actions from "../actions/profileActions";
import {USER_TOKEN_FROM_EMAIL} from "../../helpers";

const defaultState = {
  token: USER_TOKEN_FROM_EMAIL,
  id: null,
  first_name: "",
  last_name: "",
  email: "",
  is_email_verified: false,
  avatar: {
    original: "",
    thumbnail: "",
  },
};

export const userInfoReducer = handleActions(
  {
    [actions.fetchCurrentUserInfoSuccess](state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    [actions.fetchUserAvatarSuccess](state, {payload}) {
      return {
        ...state,
        avatar: {
          original: payload.original,
          thumbnail: payload.thumbnail,
        },
      };
    },
    [actions.fetchFirstLastNameSuccess](state, {payload}) {
      return {
        ...state,
        first_name: payload.first_name,
        last_name: payload.last_name,
      };
    },
  },
  defaultState
);
