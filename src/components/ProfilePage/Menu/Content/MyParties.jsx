import styled from "styled-components";
import MyPartiesIcon from "../../../../assets/svg/myParties.svg";
import {Flex} from "../../../../common/Flex";

export const MyPartiesStyled = styled.div`
  color: #eeeeee;
  white-space: nowrap;
  user-select: none;
  border-radius: 5px;
  img {
    width: 36px;
    height: 36px;
    margin-right: 34px;
  }
  span {
    font-size: 20px;
    display: none;
  }
  &:hover {
    background-color: #5063ee;
  }
`;

export const MyParties = () => {
  return (
    <MyPartiesStyled>
      <Flex align="center">
        <img src={MyPartiesIcon} alt="" />
        <span>My parties</span>
      </Flex>
    </MyPartiesStyled>
  );
};
