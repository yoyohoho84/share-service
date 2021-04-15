import styled from "styled-components";
import {Flex} from "../../../common/Flex";

const CategoriesCardStyled = styled.div`
  /* padding: ${({padding}) => padding || "0px"}; */
  /* margin-right: 22px; */
  width: 310px;
  height: 195px;
  border-radius: 19px;
  background: ${({backgroundColor}) => backgroundColor || null};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoriesCardIconStyled = styled.div`
  width: 140px;
  height: 91px;
  background: ${({background}) => `url(${background}) no-repeat` || null};
  /* background-size: ${({backgroundSize}) => backgroundSize || "contain"}; */
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
`;

const CategoriesCardTitleStyled = styled.div`
  width: 150px;
  height: 70px;
  font-size: 30px;
  align-items: center;
  display: flex;
`;

export const CategoriesCard = (props) => {
  return (
    <CategoriesCardStyled onClick={props.handleClick} {...props}>
      <Flex direction="row" justify="center" align="center">
        <CategoriesCardIconStyled {...props}></CategoriesCardIconStyled>
        <CategoriesCardTitleStyled>{props.title}</CategoriesCardTitleStyled>
      </Flex>
    </CategoriesCardStyled>
  );
};
