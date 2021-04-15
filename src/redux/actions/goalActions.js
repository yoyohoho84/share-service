import API from "../../api";
import {createAction} from "redux-actions";
// goal categories
export const goalCategoriesRequest = createAction("GOAL_CATEGORIES_REQUEST");
export const goalCategoriesRequestComplete = createAction(
  "GOAL_CATEGORIES_REQUEST_COMPLETE"
);
export const goalCategoriesInfo = createAction("GOAL_CATEGORIES_INFO");
export const goalCategoriesError = createAction("GOAL_CATEGORIES_ERROR");
// goal
export const goalRequest = createAction("GOAL_REQUEST");
export const goalRequestComplete = createAction("GOAL_REQUEST_COMPLETE");
export const goalInfo = createAction("GOAL_INFO");
export const goalError = createAction("GOAL_ERROR");
// goalId
export const goalIdRequest = createAction("GOAL_ID_REQUEST");
export const goalIdRequestComplete = createAction("GOAL_ID_REQUEST_COMPLETE");
export const goalIdInfo = createAction("GOAL_ID_INFO");
export const goalIdError = createAction("GOAL_ID_ERROR");
// joinParty
export const joinPartyRequest = createAction("JOIN_PARTY_REQUEST");
export const joinPartyRequestComplete = createAction("JOIN_PARTY_REQUEST_COMPLETE");
export const joinPartyInfo = createAction("JOIN_PARTY_INFO");
export const joinPartyError = createAction("JOIN_PARTY_ERROR");

export const getGoalCategories = () => {
  return (dispatch) => {
    dispatch(goalCategoriesRequest());
    API.goal
      .goalCategories()
      .then((response) => {
        console.log("getGoalCategories response", response.data);
        dispatch(goalCategoriesInfo(response.data));
      })
      .catch((error) => {
        console.log("getGoalCategories catch", error);
        if (error.response) {
          console.log(
            "getGoalCategories error.response.detail:",
            error.response.data.detail
          );
          dispatch(goalCategoriesError(error.response.data));
        }
      })
      .finally(() => {
        dispatch(goalCategoriesRequestComplete());
      });
  };
};

export const getGoalCards = () => {
  return (dispatch) => {
    dispatch(goalRequest());
    API.goal
      .getGoalCards()
      .then((response) => {
        console.log("getGoal response", response.data);
        dispatch(goalInfo(response.data));
      })
      .catch((error) => {
        console.log("getGoal catch", error);
        if (error.response) {
          console.log("getGoal error.response.detail:", error.response.data.detail);
          dispatch(goalError(error.response.data));
        }
      })
      .finally(() => {
        dispatch(goalRequestComplete());
      });
  };
};

export const getGoalById = (id) => {
  return (dispatch) => {
    dispatch(goalIdRequest());
    API.goal
      .getGoalById(id)
      .then((response) => {
        console.log("getGoalById response", response.data);
        dispatch(goalIdInfo(response.data));
      })
      .catch((error) => {
        console.log("getGoalById catch", error);
        if (error.response) {
          console.log("getGoalById error.response.detail:", error.response.data.detail);
          dispatch(goalIdError(error.response.data));
        }
      })
      .finally(() => {
        dispatch(goalIdRequestComplete());
      });
  };
};

export const joinParty = (id) => {
  return (dispatch) => {
    dispatch(joinPartyRequest());
    API.goal
      .joinParty(id)
      .then((response) => {
        console.log("getGoal response", response.data);
        dispatch(joinPartyInfo(response.data));
      })
      .catch((error) => {
        console.log("getGoal catch", error);
        if (error.response) {
          console.log("getGoal error.response.detail:", error.response.data.detail);
          dispatch(joinPartyError(error.response.data));
        }
      })
      .finally(() => {
        dispatch(joinPartyRequestComplete());
      });
  };
};
