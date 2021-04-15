import React, {useRef, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {fetchUpdateUserAvatar} from "../../../../../../../redux/actions/profileActions";
import {_isAuth, _userInfoSuccess} from "../../../../../../../redux/selectors";
import {
  GET_PATHNAME_URL,
  GET_EMAIL_TOKEN_FROM_URL,
  USER_AUTH_TOKEN,
} from "../../../../../../../helpers/initApp";

const ProfileUserPhotoStyled = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 auto;
  margin-bottom: 13px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ProfileUserPhoto = React.memo(() => {
  const dispatch = useDispatch();
  const isAuth = useSelector(_isAuth);
  const userInfoSuccess = useSelector(_userInfoSuccess);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const userInfoAvatar = useSelector((state) => state.userInfo.avatar);
  const inputRef = useRef();
  const uploadAvatarHandler = (e) => {
    inputRef.current.click();
  };
  const changeInputHandler = (e) => {
    console.log("ProfileUserPhoto:", USER_AUTH_TOKEN);
    const auth_token = USER_AUTH_TOKEN;
    const avatar = e.target.files[0];
    console.log("ProfileUserPhoto formData:", avatar);
    setSelectedFile(avatar);
    setIsFilePicked(true);
    dispatch(fetchUpdateUserAvatar(avatar));
  };

  // useEffect(() => {
  //  console.log("ProfileUserPhoto token:", userInfoSuccess.auth_token);
  // },[])

  return (
    <ProfileUserPhotoStyled>
      <input
        ref={inputRef}
        type="file"
        style={{display: "none"}}
        onChange={changeInputHandler}
      />
      <img src={userInfoAvatar.original} alt="" onClick={uploadAvatarHandler} />
    </ProfileUserPhotoStyled>
  );
});
