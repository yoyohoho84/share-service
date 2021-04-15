import styled from "styled-components";

export const PopupWindowStyled = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  top: 0;
  left: 0;
  backdrop-filter: blur(11px);
`;

export const PopupWindowContentStyled = styled.div`
  width: 578px;
  height: 100%;
  padding: 37px 14px;
  border-radius: 43px;
  border: 2px solid #5063ee;
  background-color: #1e252b;
  h1 {
    display: flex;
    justify-content: center;
    font-size: 38px;
    color: #eeeeee;
    padding-bottom: 50px;
  }
`;
