import styled from "styled-components";
import {Header} from "./Header";
import {MainContent} from "./MainContent";

const ProfileContentStyled = styled.div`
  padding: 0 40px 20px 104px;
  width: 100%;
  height: 100%;
`;

export const ProfileContent = () => {
  return (
    <ProfileContentStyled>
      <Header />
      {/* <MainContent /> */}
    </ProfileContentStyled>
  );
};
