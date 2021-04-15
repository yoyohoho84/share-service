import {useEffect, useState} from "react";
import styled from "styled-components";
import settingBlueSvg from "../../../../../../assets/svg/settings.svg";
import settingsWhiteSVG from "../../../../../../assets/svg/settingsWhite.svg";
import {ProfileButton} from "./ProfileButtonAndPopup/ProfileButton";
import {ProfileUserMail} from "./ProfileUserMail";
import {ProfileUserName} from "./ProfileUserName";
import {ProfileUserPhoto} from "./ProfileUserPhoto";

const SettingsButtonStyled = styled.div`
  position: absolute;
  content: "";
  width: 32px;
  height: 32px;
  right: 40px;
  top: -20px;
  cursor: pointer;
`;

const MainContentProfileStyled = styled.div`
  width: 300px;
  margin: 0 auto;
  position: relative;
`;

export const MainContentProfile = ({ViewProfileInfo}) => {
  const [editMode, setEditMode] = useState(false);
  let editModeHandler = () => {
    setEditMode((prevState) => !prevState);
  };
  useEffect(() => {
    if (!ViewProfileInfo) {
      setEditMode(false);
    }
  }, [ViewProfileInfo]);
  return (
    <MainContentProfileStyled>
      <SettingsButtonStyled>
        <img
          src={editMode ? settingBlueSvg : settingsWhiteSVG}
          alt=""
          onClick={editModeHandler}
        />
      </SettingsButtonStyled>
      <ProfileUserPhoto />
      <ProfileUserName editMode={editMode} setEditMode={setEditMode} />
      <ProfileUserMail editMode={editMode} />
      {/* <ProfileUserNickname editMode={editMode} /> */}
      <ProfileButton editMode={editMode} />
    </MainContentProfileStyled>
  );
};
