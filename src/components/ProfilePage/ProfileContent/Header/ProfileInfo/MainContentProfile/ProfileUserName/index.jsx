import {useSelector} from "react-redux";
import styled from "styled-components";
import {Flex} from "../../../../../../../common/Flex";
import {useDispatch} from "react-redux";
import {fetchUpdateUserFirstLastName} from "../../../../../../../redux/actions/profileActions";
import {useEffect, useState} from "react";
import {ProfileButtonStyled} from "../ProfileButtonAndPopup/ProfileButtonStyled";

const ProfileUserNameStyled = styled.div`
  font-size: 24px;
  color: #eeeeee;
  margin-bottom: 13px;
  input {
    font-size: 16px;
    width: 300px;
    height: 40px;
    color: #c6c6c6;
    background-color: inherit;
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    padding: 11px 0 12px 14px;
    margin-bottom: 15px;
    :focus {
      color: #000;
      border: 1px solid #fbfafa;
      background-color: #fbfafa;
    }
  }
`;

export const ProfileUserName = ({editMode, setEditMode}) => {
  const dispatch = useDispatch();

  const {first_name, last_name, id} = useSelector(({userInfo}) => userInfo);

  const [firstNameLocal, setFirstNameLocal] = useState("");
  const [lastNameLocal, setLastNameLocal] = useState("");

  useEffect(() => {
    setFirstNameLocal(first_name);
    setLastNameLocal(last_name);
  }, [first_name, last_name]);

  const firstNameHandler = (e) => {
    const firstName = e.target.value;
    setFirstNameLocal(firstName);
  };
  const lastNameHandler = (e) => {
    const lastName = e.target.value;
    setLastNameLocal(lastName);
  };

  const saveUserFirstLastName = () => {
    dispatch(fetchUpdateUserFirstLastName(firstNameLocal, lastNameLocal, id));
    setEditMode(false);
  };

  return (
    <ProfileUserNameStyled>
      {editMode ? (
        <>
          <input type="text" defaultValue={first_name} onChange={firstNameHandler} />
          <input type="text" defaultValue={last_name} onChange={lastNameHandler} />
          <Flex justify="center" margin="68px 0 17px 0">
            <ProfileButtonStyled onClick={saveUserFirstLastName}>
              Save
            </ProfileButtonStyled>
          </Flex>
        </>
      ) : (
        <Flex justify="center">
          <p>
            {first_name} {last_name}
          </p>
        </Flex>
      )}
    </ProfileUserNameStyled>
  );
};
