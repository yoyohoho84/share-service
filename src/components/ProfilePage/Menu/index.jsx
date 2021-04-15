import React from "react";
import styled from "styled-components";
import logoIcon from "../../../assets/svg/logo-icon.svg";
import logoName from "../../../assets/svg/GoalParty.svg";
import {Flex} from "../../../common/Flex";
import {Catalog, CatalogStyled} from "./Content/Catalog";
import {MyParties, MyPartiesStyled} from "./Content/MyParties";

const Logo = styled.div`
  margin-bottom: 170px;
  img {
    margin-top: 35px;
    :first-child {
      margin-right: 17px;
      width: 39px;
      height: 44px;
    }
    :nth-child(2) {
      display: none;
      width: 146px;
      height: 44px;
    }
  }
`;

const MenuStyled = styled.div`
  background-color: #2c353d;
  width: 84px;
  height: 100vh;
  padding: 0 23px;
  transition: 0.5s;
  overflow-x: hidden;
  color: #fff;
  position: fixed;
  z-index: 1;
  :hover {
    width: 245px;
    ${Logo} {
      img {
        :nth-child(2) {
          display: block;
        }
      }
    }
    ${CatalogStyled}, ${MyPartiesStyled} {
      span {
        display: block;
      }
    }
  }
`;

export const Menu = React.memo(() => {
  return (
    <MenuStyled>
      <Logo>
        <Flex>
          <img src={logoIcon} alt="" />
          <img src={logoName} alt="" />
        </Flex>
      </Logo>
      <Catalog />
      <MyParties />
    </MenuStyled>
  );
});
