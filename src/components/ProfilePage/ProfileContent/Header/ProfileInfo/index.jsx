import styled from "styled-components";
import {MainContentProfile} from "./MainContentProfile";
import BackgroundProfileInfo from "../../../../../assets/img/Background.png";

const ProfileInfoStyled = styled.div`
  width: ${(props) => (props.ViewProfileInfo ? "380px" : "0")};
  height: 100%;
  background-color: #2c353d;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: ${(props) => (props.ViewProfileInfo ? "34px 40px " : "34px 0")};
  overflow-x: hidden;
  transition: 0.7s;
  background: #2c353d url(${BackgroundProfileInfo}) 0 0 / cover no-repeat;
  header {
    margin-bottom: 158px;
    p {
      opacity: 0.5;
      white-space: nowrap;
      color: #eeeeee;
      font-size: 24px;
    }
  }
`;

export const ProfileInfo = (props) => {
  return (
    <ProfileInfoStyled {...props}>
      <header>
        <p>My profile</p>
      </header>
      <MainContentProfile {...props} />
    </ProfileInfoStyled>
  );
};
