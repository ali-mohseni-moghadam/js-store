const validateUsername = (username) => {
  const regex = /^[a-zA-Z]\d_{4-16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4-20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Username is not valid");
  } else if (!passwordResult) {
    alert("Password is not valid");
  }
};

export { validateForm };
