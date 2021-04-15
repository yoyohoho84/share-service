import {useState, useEffect} from "react";
import styled from "styled-components";
// import NotificationSvg from "../../../../assets/svg/Notification.svg";
import NotificationONSvg from "../../../../assets/svg/NotificationON.svg";
import ProfileIcon from "../../../../assets/svg/Profile.svg";
import ProfileIconWhite from "../../../../assets/svg/ProfileIconWhite.svg";
import {Flex} from "../../../../common/Flex";
import {NotificationPopup} from "./Notification/NotificationPopup";
import {ProfileInfo} from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUserInfo} from "../../../../redux/actions/profileActions";
import {_isAuth, _userInfoSuccess} from "../../../../redux/selectors";
import {
  GET_PATHNAME_URL,
  GET_EMAIL_TOKEN_FROM_URL,
  USER_AUTH_TOKEN,
} from "../../../../helpers/initApp";

const HeaderStyled = styled.div`
  padding-left: 84px;
  height: 100px;
  width: 100%;
  a {
    z-index: 2;
    img {
      width: 32px;
      height: 32px;
      margin: 0 0 0 20px;
    }
  }
`;

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(_isAuth);
  const userInfoSuccess = useSelector(_userInfoSuccess);
  const [ViewProfileInfo, setViewProfileInfo] = useState(false);
  const [notificationPopupView, setNotificationPopupView] = useState(false);
  let ViewProfileInfoHandler = () => {
    setViewProfileInfo((prevstate) => !prevstate);
  };

  let notificationPopupViewHandler = () => {
    setNotificationPopupView((prevstate) => !prevstate);
  };

  useEffect(() => {
    dispatch(
      fetchCurrentUserInfo(userInfoSuccess ? userInfoSuccess.auth_token : USER_AUTH_TOKEN)
    );
  }, [userInfoSuccess]);

  return (
    <HeaderStyled>
      <Flex height="100%" align="center" justify="flex-end" margin="0 20px 0 0">
        <a href="#">
          <img src={NotificationONSvg} alt="" onClick={notificationPopupViewHandler} />
        </a>
        <NotificationPopup
          notificationPopupView={notificationPopupView}
          setNotificationPopupView={setNotificationPopupView}
        />
        <a href="#">
          <img
            src={ViewProfileInfo ? ProfileIcon : ProfileIconWhite}
            alt=""
            onClick={ViewProfileInfoHandler}
          />
        </a>
        <ProfileInfo ViewProfileInfo={ViewProfileInfo} />
      </Flex>
    </HeaderStyled>
  );
};
