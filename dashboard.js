import { authHandler } from "./utils/authorization.js";

const inint = () => {
  authHandler();
};

document.addEventListener("DOMContentLoaded", inint);
