import {createAction} from "redux-actions";
import profileAPI from "../../api/profileAPI";

export const fetchUserDataSuccess = createAction("FETCH_USER_DATA_SUCCESS");
export const fetchCurrentUserInfoSuccess = createAction(
  "FETCH_CURRENT_USER_INFO_SUCCESS"
);
export const fetchUserAvatarSuccess = createAction("FETCH_USER_AVATAR_SUCCESS");
export const fetchFirstLastNameSuccess = createAction("FETCH_FIRST_LAST_NAME_SUCCESS");

export const fetchCurrentUserInfo = (token) => async (dispatch) => {
  const userInfo = await profileAPI.getCurrentUserInfo(token);
  dispatch(fetchCurrentUserInfoSuccess(userInfo));
};

export const fetchUpdateUserAvatar = (selectedFile) => async (dispatch) => {
  const userAvatar = await profileAPI.uploadUserAvatar(selectedFile);
  dispatch(fetchUserAvatarSuccess(userAvatar.avatar));
};

export const fetchUpdateUserFirstLastName = (firstName, lastName, id) => async (
  dispatch
) => {
  const userFirstLastName = await profileAPI.updateUserFirstLastName(
    firstName,
    lastName,
    id
  );
  dispatch(fetchFirstLastNameSuccess(userFirstLastName));
};

// export const loginUser = (email, password) => {
//   return (dispatch) => {
//     dispatch(loginUserRequest());
//     API.profile
//       .getCurrentUserInfo()
//       .then((response) => {
//         dispatch(fetchCurrentUserInfoSuccess(userInfo));
//       })
//       .catch((error) => {
//         console.log("getCurrentUserInfo catch", error);
//       })
//       .finally(() => {
//         // dispatch(loginUserRequestComplete());
//       });
//   };
// };
