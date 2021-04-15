import {handleActions} from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  loading: false,
  goalCategoriesError: [],
  goalCategoriesInfo: null,
  goalError: [],
  goalInfo: null,
  goalIdError: [],
  goalIdInfo: null,
  joinPartyError: [],
  joinPartyInfo: null,
};

export const goalReducer = handleActions(
  {
    [actions.goalCategoriesRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.goalCategoriesRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.goalCategoriesInfo](state, {payload}) {
      return {
        ...state,
        goalCategoriesInfo: payload,
      };
    },
    [actions.goalCategoriesError](state, {payload}) {
      return {
        ...state,
        goalError: payload,
      };
    },

    [actions.goalIdRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.goalIdRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.goalIdInfo](state, {payload}) {
      return {
        ...state,
        goalIdInfo: payload,
      };
    },
    [actions.goalIdError](state, {payload}) {
      return {
        ...state,
        goalIdError: payload,
      };
    },

    [actions.goalRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.goalRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.goalInfo](state, {payload}) {
      return {
        ...state,
        goalInfo: payload,
      };
    },
    [actions.goalError](state, {payload}) {
      return {
        ...state,
        goalError: payload,
      };
    },

    [actions.joinPartyRequest](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [actions.joinPartyRequestComplete](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [actions.joinPartyInfo](state, {payload}) {
      return {
        ...state,
        joinPartyInfo: payload,
      };
    },
    [actions.joinPartyError](state, {payload}) {
      return {
        ...state,
        goalError: payload,
      };
    },
  },
  defaultState
);
