import styled from "styled-components";
import {Flex} from "../../../common/Flex";

const LookingNowCardStyled = styled.div`
  padding: ${({position}) =>
    position === "vertical" ? "129px 0px 30px 0px" : "122px 40px 30px 22px"};
  margin: 0px 20px 20px 0px;
  width: ${({widthCard}) => widthCard || null};
  height: ${({heightCard}) => heightCard || null};
  border-radius: 19px;
  background: ${({imageCard}) => `url(${imageCard}) no-repeat` || null};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
  background-size: cover;
  display: flex;
  flex-direction: ${({directionCard}) => directionCard || "row"};
  justify-content: center;
  align-items: ${({alignCard}) => alignCard || "center"}; ;
`;

const LookingNowCardIconStyled = styled.div`
  width: 120px;
  height: 92px;
  background: ${({iconCard}) => `url(${iconCard}) no-repeat` || null};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
`;

const LookingNowCardTitleStyled = styled.div`
  font-size: 30px;
  align-items: center;
  display: flex;
`;

const LookingNowCardDescriptionStyled = styled.div`
  font-size: 16px;
  align-items: center;
  display: flex;
  color: #868686;
`;

const LookingNowCardContainerStyled = styled.div`
  margin-left: 26px;
  /* display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center; */
`;

export const LookingNowCard = (props) => {
  return (
    <LookingNowCardStyled onClick={props.handleClick} {...props}>
      <LookingNowCardIconStyled {...props}></LookingNowCardIconStyled>

      <LookingNowCardContainerStyled>
        <LookingNowCardTitleStyled>{props.titleCard}</LookingNowCardTitleStyled>
        <LookingNowCardDescriptionStyled>
          {props.descriptionCard}
        </LookingNowCardDescriptionStyled>
      </LookingNowCardContainerStyled>
    </LookingNowCardStyled>
  );
};
