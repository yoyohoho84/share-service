import React, {useEffect, useState} from "react";
import {navigate} from "@reach/router";
import Masonry from "react-masonry-css";
import {useSelector, useDispatch} from "react-redux";
import {
  _goalCategoriesInfo,
  _goalCategoriesError,
  _goalInfo,
  _goalError,
} from "../../redux/selectors";
import {getGoalCategories, getGoalCards, getGoalById} from "../../redux/actions";

import styled from "styled-components";
import Slider from "react-slick";
import {Flex} from "../../common/Flex";
import {LookingNowCard} from "./LookingNowCard";
import {CategoriesCard} from "./CategoriesCard";
import {Menu} from "../ProfilePage/Menu";
import {ProfileContent} from "../ProfilePage/ProfileContent";
import {DefaultInput} from "../../components/";
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

const CategoriesStyled = styled.div`
  font-size: 36px;
  margin-bottom: 17px;
`;

const CategoriesMasonryGridStyled = styled.div`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
`;

const CategoriesMasonryGridColumnStyled = styled.div`
  flex-grow: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledDefaultInput = styled.input`
  height: 40px;
  width: 95%;
  border: ${({inputError}) => (inputError ? "2px solid red" : "1px solid #c6c6c6")};
  background-color: inherit;
  border-radius: 4px;
  margin: ${({margin}) => margin || "0px 0px 20px 0px"};
  padding: 12px 0px 11px 14px;
  font-size: 20px;
  color: #c6c6c6;
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

export const GoalPage = () => {
  const dispatch = useDispatch();
  const goalCategoriesInfo = useSelector(_goalCategoriesInfo);
  const goalInfo = useSelector(_goalInfo);
  const [filterGoalCard, setFilterGoalCard] = useState(null);
  const [filterCategoriesName, setFilterCategoriesName] = useState("Сейчас ищут");
  const [inputSearchValue, setInputSearchValue] = useState("");

  useEffect(() => {
    dispatch(getGoalCategories());
    dispatch(getGoalCards());

    console.log("goalCategoriesInfo:", goalCategoriesInfo);
    console.log("goalInfo:", goalInfo);
  }, []);

  const renderGoalCategories = goalCategoriesInfo?.map((item) => {
    return (
      <div key={item.id}>
        <CategoriesCard
          // key={item.id}
          title={item.title}
          background={item.image}
          backgroundColor={item.background}
          handleClick={() => filterGoalCategories(item.id)}
        />
      </div>
    );
  });

  const renderGoalLookingNowCard = goalInfo?.map((item) => {
    return (
      <div key={item.id}>
        <LookingNowCard
          titleCard={item.title}
          descriptionCard={item.description}
          iconCard={item.icon}
          imageCard={item.image}
          position={item.position}
          widthCard={item.id % 2 === 0 ? "310px" : "420px"}
          heightCard={item.id % 2 === 0 ? "361px" : "233px"}
          directionCard={item.id % 2 === 0 ? "column" : "row"}
          alignCard={item.id % 2 === 0 ? "start" : "center"}
          handleClick={() => {
            navigate(`/goal-family/?id=${item.id}`);
            dispatch(getGoalById(item.id));
          }}
        />
      </div>
    );
  });

  function filterGoalCategories(id) {
    console.log("id:", id);
    const goalFilter = goalInfo?.map((item, index) => {
      if (item.category.id === id) {
        return (
          <div key={item.id}>
            <LookingNowCard
              key={item.id}
              titleCard={item.title}
              descriptionCard={item.description}
              iconCard={item.icon}
              imageCard={item.image}
              position={item.position}
              widthCard={item.id % 2 === 0 ? "310px" : "420px"}
              heightCard={item.id % 2 === 0 ? "361px" : "233px"}
              directionCard={item.id % 2 === 0 ? "column" : "row"}
              alignCard={item.id % 2 === 0 ? "start" : "center"}
              handleClick={() => {
                navigate(`/goal-family/?id=${item.id}`);
                dispatch(getGoalById(item.id));
              }}
            />
          </div>
        );
      } else {
      }
    });

    setFilterGoalCard(goalFilter);

    const findTitleCategories = goalCategoriesInfo.find((item) => id === item.id);
    setFilterCategoriesName(findTitleCategories.title);
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    980: 1,
  };

  const inputHandler = (e, type) => {
    setInputSearchValue(e.target.value);
    const inputValue = e.target.value;

    const filter = goalInfo.filter((goal) => {
      return goal.title.toLowerCase().includes(inputValue);
    });

    const goalSearchResult = filter?.map((item, index) => {
      return (
        <div key={item.id}>
          <LookingNowCard
            key={item.id}
            titleCard={item.title}
            descriptionCard={item.description}
            iconCard={item.icon}
            imageCard={item.image}
            position={item.position}
            widthCard={item.id % 2 === 0 ? "310px" : "420px"}
            heightCard={item.id % 2 === 0 ? "361px" : "233px"}
            directionCard={item.id % 2 === 0 ? "column" : "row"}
            alignCard={item.id % 2 === 0 ? "start" : "center"}
            handleClick={() => {
              navigate(`/goal-family/?id=${item.id}`);
              dispatch(getGoalById(item.id));
            }}
          />
        </div>
      );
    });

    setFilterGoalCard(goalSearchResult);
  };

  return (
    <GoalPageStyled>
      <Flex>
        <Menu />
        <ProfileContent />
      </Flex>
      <Flex margin="0px 0px 0px 150px" direction="column">
        <CategoriesStyled>Categories</CategoriesStyled>
        <div style={{width: "1277px"}}>
          <Slider {...settings}>{renderGoalCategories}</Slider>
        </div>
      </Flex>
      <Flex margin="66px 0px 0px 150px" direction="column">
        <StyledDefaultInput placeholder="Введи название гоала" onChange={inputHandler} />
      </Flex>

      <Flex margin="66px 0px 0px 150px" direction="column">
        <CategoriesStyled>{filterCategoriesName}</CategoriesStyled>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {filterGoalCard ? filterGoalCard : renderGoalLookingNowCard}
        </Masonry>
        {/* </Flex> */}
      </Flex>
    </GoalPageStyled>
  );
};
