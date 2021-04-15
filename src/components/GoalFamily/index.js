import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {_goalIdInfo, _goalIdError, _goalInfo, _goalError} from "../../redux/selectors";
import {getGoalById, getGoalCards, joinParty, qrCodeActions} from "../../redux/actions";
import {url} from "../../helpers/initApp";

import styled from "styled-components";
import Slider from "react-slick";
import {Flex} from "../../common/Flex";
import {Button} from "../../components/Button";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {MainContent} from "./MainContent";
import {LookingNowCard} from "../GoalPage/LookingNowCard";
import {CategoriesCard} from "../GoalPage/CategoriesCard";
import {Menu} from "../ProfilePage/Menu";
import {ProfileContent} from "../ProfilePage/ProfileContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoalPageStyled = styled.div`
  margin: 0 auto;
  background-color: #1e252b;
  position: relative;
  min-height: 100%;
  /* min-width: 1191px; */
  overflow-x: hidden;
`;

const GoalPageQrCodeImgStyled = styled.img`
  height: 200px;
  width: 200px;
`;

const GoalPageQrCodeTitleStyled = styled.div`
  font-size: 28px;
  margin: 0px 0px 20px 0px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  //   autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1824,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      },
    },
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      },
    },
  ],
};

const urlId = url.searchParams.get("id");

export const GoalFamily = () => {
  const dispatch = useDispatch();
  const goalInfo = useSelector(_goalInfo);
  const goalIdInfo = useSelector(_goalIdInfo);
  const [filterGoalCard, setFilterGoalCard] = useState(null);
  const [filterCategoriesName, setFilterCategoriesName] = useState("Сейчас ищут");
  // const urlId = url.searchParams.get("id");
  const [goalIdFromUrlParams, setGoalIdFromUrlParams] = useState(null);
  const urlForQrCode = window.location.href;
  const [qrCodeImg, setQrCodeImg] = useState(false);

  useEffect(() => {
    dispatch(getGoalCards());
    // dispatch(getGoalById(urlId));
    console.log("useEffect goalIdInfo:", goalIdInfo);
    // setGoalIdFromUrlParams(url.searchParams.get("id"));
  }, []);

  const renderGoalLookingNowCard = goalInfo?.map((item) => {
    return (
      <div key={item.id}>
        <LookingNowCard
          key={item.id}
          titleCard={item.title}
          descriptionCard={item.description}
          iconCard={item.icon}
          imageCard={item.image}
          position={"vertical"}
          widthCard="420px"
          heightCard="233px"
          directionCard="row"
          alignCard="center"
        />
      </div>
    );
  });

  return (
    <GoalPageStyled>
      <Flex>
        <Menu />
        <ProfileContent />
      </Flex>
      <Flex direction="column">
        <Header
          iconHeader={goalIdInfo?.icon}
          backgroundHeader={goalIdInfo?.image}
          title={goalIdInfo?.title}
          handleClick={() => dispatch(joinParty(goalIdInfo?.id))}
        />
        <MainContent goalIdInfo={goalIdInfo}></MainContent>
        {qrCodeImg ? (
          <Flex margin="0px 0px 0px 230px" direction="column">
            <GoalPageQrCodeTitleStyled>QR код гоала:</GoalPageQrCodeTitleStyled>
            <GoalPageQrCodeImgStyled
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${urlForQrCode}&size=400x400`}
            />
          </Flex>
        ) : (
          <Button
            margin="0px 0px 0px 230px"
            nameButton="Поулчить QR код гоала"
            width="285px"
            height="42px"
            backgroundColor="#5063EE"
            borderColor="transparent"
            // handleClick={() => dispatch(qrCodeActions(urlForQrCode))}
            handleClick={() => setQrCodeImg(true)}
          />
        )}
      </Flex>
      <Flex margin="0px 0px 0px 231px" direction="column">
        <div style={{marginTop: "124px"}}>
          <Slider {...settings}>{renderGoalLookingNowCard}</Slider>
        </div>
      </Flex>
    </GoalPageStyled>
  );
};
