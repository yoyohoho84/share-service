import styled from "styled-components";
import {Flex} from "../../../../../../../common/Flex";

const ProfileUserNicknameStyled = styled.div`
  font-size: 20px;
  color: #828282;
  input {
    font-size: 16px;
    width: 300px;
    height: 40px;
    color: #c6c6c6;
    background-color: inherit;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    padding: 11px 0 12px 14px;
    :focus {
      color: #000;
      outline: none;
      border: 1px solid #fbfafa;
      background-color: #fbfafa;
    }
  }
`;

export const ProfileUserNickname = (props) => {
  return (
    <ProfileUserNicknameStyled {...props}>
      {props.editMode ? (
        <input type="text" defaultValue="@Ablack" />
      ) : (
        <Flex justify="center">
          <p>@Ablack</p>
        </Flex>
      )}
    </ProfileUserNicknameStyled>
  );
};
