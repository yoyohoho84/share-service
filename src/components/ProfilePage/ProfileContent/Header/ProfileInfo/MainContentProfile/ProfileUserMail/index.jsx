import styled from "styled-components";
import {Flex} from "../../../../../../../common/Flex";
import {useSelector} from "react-redux";

const ProfileUserMailStyled = styled.div`
  font-size: 20px;
  color: #5063ee;
  margin-bottom: 152px;
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

export const ProfileUserMail = (props) => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <>
      {!props.editMode && (
        <ProfileUserMailStyled {...props}>
          <Flex justify="center">
            <p>{userInfo.email}</p>
          </Flex>
        </ProfileUserMailStyled>
      )}
    </>
  );
};
