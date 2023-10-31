import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;
  console.log(url);

  if (cookie && url.includes("auth")) {
    location.assign("index.html");
    return false;
  } else if (!cookie && url.includes("dashboard")) {
    location.assign("index.html");
    return false;
  }
};

export { authHandler };
