import styled from "styled-components";

export const ProfileButtonStyled = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "271px"};
  height: 53px;
  background: ${(props) => props.backgroundColor || "#5063ee"};
  border-radius: 19px;
  color: #eeeeee;
  cursor: pointer;
`;
