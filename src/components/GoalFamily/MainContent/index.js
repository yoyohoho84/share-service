import styled from "styled-components";
import {Flex} from "../../../common/Flex";
import {Button} from "../../../components/Button";

const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10% 0px 231px;
  margin: 43px 0px 50px 0px;
  width: 100%;
  height: 160px;
  background: ${({backgroundMainContent}) =>
    `url(${backgroundMainContent}) no-repeat` || null};
  background-size: ${({backgroundSize}) => backgroundSize || "cover"};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
`;

const MainContentIconStyled = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 60px;
  background: ${({iconMainContent}) => `url(${iconMainContent}) no-repeat` || null};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
  background-size: ${({backgroundSize}) => backgroundSize || "contain"};
`;

const MainContentTitleStyled = styled.div`
  width: 100%;
  height: 100px;
  font-size: 20px;
  align-items: center;
  display: flex;
  color: #868686;
  margin-bottom: 43px;
`;

const MainContentCircleStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 59px;
  height: 59px;
  font-size: 36px;
  background-color: ${({backgroundColor}) => backgroundColor || null};
  background: ${({circleImg}) => (circleImg ? `url(${circleImg}) no-repeat` : "black")};
  background-position: ${({backgroundPosition}) => backgroundPosition || "center"};
  background-size: ${({backgroundSize}) => backgroundSize || "contain"};
  margin-right: -25px;
  border-radius: 50%;
`;

export const MainContent = (props) => {
  return (
    <MainContentStyled {...props}>
      <MainContentIconStyled {...props} />
      <MainContentTitleStyled>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
        nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </MainContentTitleStyled>
      <Flex direction="row" align="start" justify="start" width="100%">
        {props.goalIdInfo?.parties[0]?.members
          ? props.goalIdInfo.parties[0].members.map((item) => {
              return (
                <MainContentCircleStyled key={item.id} circleImg={item.user_avatar} />
              );
            })
          : ""}
        <MainContentCircleStyled backgroundColor="black">
          {props.goalIdInfo?.parties[0]?.members
            ? props.goalIdInfo.parties[0].members.length
            : "?"}
        </MainContentCircleStyled>
      </Flex>
    </MainContentStyled>
  );
};
