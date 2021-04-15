import styled from "styled-components";
import {Flex} from "../../common/Flex";
import {Menu} from "./Menu";
import {ProfileContent} from "./ProfileContent";

const ProfilePageStyled = styled.div`
  margin: 0 auto;
  background-color: #1e252b;
  position: relative;
  min-height: 100%;
`;

export const ProfilePage = () => {
  return (
    <ProfilePageStyled>
      <Flex>
        <Menu />
        <ProfileContent />
      </Flex>
    </ProfilePageStyled>
  );
};
