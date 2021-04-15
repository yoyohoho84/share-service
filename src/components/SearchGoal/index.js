import styled from "styled-components";
import {Flex} from "../../common/Flex";
import {Button} from "../../components/Button";
import {DefaultInput} from "../../components/";

const HeaderStyled = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0px 10% 0px 231px;
  margin: -130px 0px 50px 0px;
  width: 100%;
  height: 352px;
  background: ${({backgroundHeader}) => `url(${backgroundHeader}) no-repeat` || null};
  background-size: ${({backgroundSize}) => backgroundSize || "cover"};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
`;

export const SearchGoal = (props) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      margin="0px 0px -40px 0px "
      width="100%">
      <DefaultInput />
      <Button
        nameButton="Поиск"
        width="235px"
        height="42px"
        backgroundColor="#5063EE"
        borderColor="transparent"
        handleClick={() => console.log("123123")}
      />
    </Flex>
  );
};
