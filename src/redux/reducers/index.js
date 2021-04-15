import {userInfoReducer} from "./userInfoReducer";
import {authUserReducer} from "./authUserReducer";
import {confirmEmailReducer} from "./confirmEmailReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";
import {oauthUserReducer} from "./oauthUserReducer";
import {goalReducer} from "./goalReducer";
import {qrCodeReducer} from "./qrCodeReducer";

export default {
  userInfo: userInfoReducer,
  authUser: authUserReducer,
  confirmEmail: confirmEmailReducer,
  setNewPassword: setNewPasswordReducer,
  oauthUser: oauthUserReducer,
  goal: goalReducer,
  qrCode: qrCodeReducer,
};
