import {navigate, Router} from "@reach/router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLIENT_GOOGLE_INIT} from "./api/consts";
import {ProfilePage} from "./components/ProfilePage";
import {GoalPage} from "./components/GoalPage";
import {GoalFamily} from "./components/GoalFamily";
import {NotFound} from "./components/NotFound";
import "./styles/index.css";
import {
  ChangePassword,
  FeedbackRecoverPass,
  RecoverPassword,
  SignIn,
  SignUp,
  SuccessfulAuth,
  SuccessfulPassChange,
} from "./Pages";
import {forgotPassword, confirmEmailUser} from "./redux/actions";
import {_isAuth} from "./redux/selectors";

import {
  GET_PATHNAME_URL,
  GET_EMAIL_TOKEN_FROM_URL,
  USER_AUTH_TOKEN,
  url,
} from "./helpers/initApp";

window.gapi?.load("auth2", function () {
  window.gapi.auth2
    .init({
      client_id: CLIENT_GOOGLE_INIT,
    })
    .then((res) => {
      console.log("GOOGLE INIT OK:", res);
    })
    .catch((err) => {
      console.log("GOOGLE INIT ERROR:", err);
    });
});

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(_isAuth);

  useEffect(() => {
    // Если в localStorage есть токен юзера то перенаправляем на страницу профиля
    // или на главную если он не авторизован
    console.log("isAuth App:", isAuth);
    if (USER_AUTH_TOKEN) {
      navigate("/goal-page");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    switch (GET_PATHNAME_URL) {
      case "confirm_email":
        dispatch(confirmEmailUser(GET_EMAIL_TOKEN_FROM_URL));
        break;
      case "forgot_password":
        navigate("/change-password");
        break;

      default:
        break;
    }
  }, []);

  http: return (
    <>
      <Router style={{height: "100%"}}>
        <ProfilePage path="profile" />
        <SignUp path="/" />
        <SignIn path="/sign-in" />
        <SuccessfulAuth path="/successful-auth" />
        <RecoverPassword path="/recover-password" />
        <FeedbackRecoverPass path="/feedback-recover-pass" />
        <ChangePassword path="/change-password" />
        <SuccessfulPassChange path="/successful-password-change" />
        <GoalPage path="/goal-page" />
        <GoalFamily path="/goal-family/" />
        {/* <NotFound default /> */}
      </Router>
    </>
  );
};

export default App;
