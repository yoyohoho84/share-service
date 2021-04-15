import {navigate} from "@reach/router";
import styled from "styled-components";
import CatalogIcon from "../../../../assets/svg/Catalog.svg";
import {Flex} from "../../../../common/Flex";

export const CatalogStyled = styled.div`
  color: #eeeeee;
  margin-bottom: 40px;
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

export const Catalog = () => {
  return (
    <CatalogStyled onClick={() => navigate("/goal-page")}>
      <Flex align="center">
        <img src={CatalogIcon} alt="" />
        <span>Catalog</span>
      </Flex>
    </CatalogStyled>
  );
};
