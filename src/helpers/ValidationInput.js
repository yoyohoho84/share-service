export const inputHandler = (
  e,
  type,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError
) => {
  let regExpEmail;
  let regExpPassword;
  switch (type) {
    case "email":
      regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmail(e.target.value);
      if (!regExpEmail.test(String(e.target.value).toLowerCase())) {
        setEmailError("enter valid email");
      } else {
        setEmailError("");
      }
      if (e.target.value === "") {
        setEmailError("Email не может быть пустым");
      }

      break;
    case "password":
      // (?=.*\d) должен содержать хотя бы одну цифру
      // (?=.*[a-z]) должен содержать хотя бы один нижний регистр
      // (?=.*[A-Z]) должен содержать хотя бы один верхний регистр
      // [a-zA-Z0-9]{8,} должен содержать не менее 8 из указанных символов

      regExpPassword = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      setPassword(e.target.value);
      if (!regExpPassword.test(String(e.target.value))) {
        setPasswordError("enter valid password");
      } else {
        setPasswordError("");
      }
      if (e.target.value === "") {
        setPasswordError("Пароль не может быть пустым");
      }
      break;
    default:
      break;
  }
};

export const blurHandler = (e, setEmailDirty, setPasswordDirty) => {
  switch (e.target.name) {
    case "email":
      setEmailDirty(true);

      break;
    case "password":
      setPasswordDirty(true);
      break;

    default:
      break;
  }
};

// export {blurHandler, inputHandler};
