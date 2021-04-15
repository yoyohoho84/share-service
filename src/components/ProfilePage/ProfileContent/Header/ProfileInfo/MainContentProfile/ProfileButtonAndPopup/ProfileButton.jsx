import React, {useState} from "react";
import {Flex} from "../../../../../../../common/Flex";
import {ChangePasswordPopup} from "./PopupWindows/ChangePasswordPopup";
import {DeleteAccountPopupWindow} from "./PopupWindows/DeleteAccountPopupWindow";
import {SignOutPopupWindow} from "./PopupWindows/SignOutPopupWindow";
import {ProfileButtonStyled} from "./ProfileButtonStyled";

export const ProfileButton = React.memo((props) => {
  const [signOutViewPopup, setSignOutViewPopup] = useState(false);
  const [deleteAccountPopupView, setDeleteAccountPopupView] = useState(false);
  const [changePasswordPopupView, setChangePasswordPopupView] = useState(false);

  let signOutPopupHandler = () => {
    setSignOutViewPopup((prevState) => !prevState);
  };

  let deleteAccountPopupHandler = () => {
    setDeleteAccountPopupView((prevState) => !prevState);
  };

  let changePasswordPopupHandler = () => {
    setChangePasswordPopupView((prevState) => !prevState);
  };

  return (
    <>
      {props.editMode ? (
        <>
          <Flex justify="center" margin="0 0 17px 0">
            {changePasswordPopupView && (
              <ChangePasswordPopup
                setChangePasswordPopupView={setChangePasswordPopupView}
              />
            )}
            <ProfileButtonStyled onClick={changePasswordPopupHandler}>
              Change password
            </ProfileButtonStyled>
          </Flex>
          <Flex justify="center">
            {deleteAccountPopupView && (
              <DeleteAccountPopupWindow
                setDeleteAccountPopupView={setDeleteAccountPopupView}
              />
            )}
            <ProfileButtonStyled
              onClick={deleteAccountPopupHandler}
              backgroundColor="#EB5757">
              Delete account
            </ProfileButtonStyled>
          </Flex>
        </>
      ) : (
        <Flex justify="center">
          {signOutViewPopup && (
            <SignOutPopupWindow setSignOutViewPopup={setSignOutViewPopup} />
          )}
          <ProfileButtonStyled onClick={signOutPopupHandler}>
            Sign out
          </ProfileButtonStyled>
        </Flex>
      )}
    </>
  );
});
