import styled from "styled-components";
import {Flex} from "../../../common/Flex";
import {Button} from "../../../components/Button";

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

const HeaderIconStyled = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 60px;
  background: ${({iconHeader}) => `url(${iconHeader}) no-repeat` || null};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
  background-size: ${({backgroundSize}) => backgroundSize || "contain"};
`;

const HeaderTitleStyled = styled.div`
  width: 150px;
  height: 70px;
  font-size: 45px;
  align-items: center;
  display: flex;
`;

export const Header = (props) => {
  return (
    <HeaderStyled {...props}>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        margin="0px 0px -40px 0px "
        width="100%">
        <Flex direction="row" justify="center" align="center">
          <HeaderIconStyled {...props}></HeaderIconStyled>
          <HeaderTitleStyled>{props.title}</HeaderTitleStyled>
        </Flex>
        <Button
          nameButton="Вступить в тусу"
          width="235px"
          height="42px"
          backgroundColor="#5063EE"
          borderColor="transparent"
          handleClick={props.handleClick}
        />
      </Flex>
    </HeaderStyled>
  );
};
