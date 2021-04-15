import {Flex} from "../../../../../../../../common/Flex";
import {ProfileButtonStyled} from "../ProfileButtonStyled";
import styled from "styled-components";
import {PopupWindowContentStyled, PopupWindowStyled} from "./PopupWindowStyled";

const SuccessChangePasswordPopupStyled = styled.div`
  p {
    color: #bdbdbd;
    font-size: 20px;
    width: 220px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const SuccessChangePasswordPopup = () => {
  return (
    <PopupWindowStyled>
      <PopupWindowContentStyled>
        <h1>Success!</h1>
        <SuccessChangePasswordPopupStyled>
          <p>Dude, don’t forget your new password :)</p>
          <Flex justify="center">
            <ProfileButtonStyled>Okey, bro</ProfileButtonStyled>
          </Flex>
        </SuccessChangePasswordPopupStyled>
      </PopupWindowContentStyled>
    </PopupWindowStyled>
  );
};
