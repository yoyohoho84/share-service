// Получение данных о пользователе из localStorage
export const USER_INFO_LOCAL_STORAGE = localStorage.getItem("userInfo");
export const USER_AUTH_TOKEN = JSON.parse(USER_INFO_LOCAL_STORAGE)?.auth_token;
export const USER_TOKEN_FROM_EMAIL = localStorage.getItem("userTokenFromEmail");
export const USER_INFO_AUTH_TOKEN = JSON.parse(USER_INFO_LOCAL_STORAGE)?.auth_token
  ? true
  : false;
// console.log("userInfoLocal", userInfo);
// console.log("USER_INFO_AUTH_TOKEN", USER_INFO_AUTH_TOKEN);
export const url = new URL(window.location.href);
// PATHNAME запроса /confirm_email или /forgot_password
export const GET_PATHNAME_URL = url.pathname.split("/", 4)[2];
// получения токена из эл почты и добавление его в localStorage,
// для отправки запроса на подтверждение нового
export const GET_EMAIL_TOKEN_FROM_URL = url.pathname.split("/", 4)[3];
localStorage.setItem("emailTokenFromUrl", JSON.stringify(GET_EMAIL_TOKEN_FROM_URL));
console.log("GET_EMAIL_TOKEN_FROM_URL", GET_EMAIL_TOKEN_FROM_URL);
