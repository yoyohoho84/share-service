import styled from "styled-components";
import {Flex} from "../../../../../common/Flex";

const NotificationContentStyled = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 18px;
    color: #eeeeee;
    margin-bottom: 10px;
    span {
      color: #5063ee;
      white-space: nowrap;
    }
  }
`;

const NotificationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5063ee;
  border-radius: 7px;
  background-color: inherit;
  color: #5063ee;
  padding: 4px 9px;
`;

const NotificationTime = styled.p`
  color: #eeeeee;
  margin: 0 !important;
  opacity: 0.4;
`;

export const NotificationContent = () => {
  return (
    <>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
      <NotificationContentStyled>
        <p>
          Вас добавили на тусу <span>#ОторвемсяСТобой</span>
        </p>
        <Flex justify="space-between" align="center">
          <NotificationTime>сегодня в 18.43</NotificationTime>
          <NotificationButton>Перейти к тусе</NotificationButton>
        </Flex>
      </NotificationContentStyled>
    </>
  );
};
