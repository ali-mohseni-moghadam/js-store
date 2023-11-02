import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import shortenText from "./utils/stringFunction.js";

const loginButton = document.querySelector("#login");
const dashButton = document.querySelector("#dashboard");
const mainContent = document.querySelector("#products");

const showProducts = (products) => {
  mainContent.innerHTML = "";

  products.forEach((product) => {
    const jsx = `
        <div>
            <img alt=${product.title} src=${product.image} />
            <h4>${shortenText(product.title)}</h4>
            <div id="price">
                <p>$ ${product.price}</p>
                <button>
                    buy
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <div id="rate">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating.rate}</span>
            </div>
            <div id="count">
            <i class="fa-solid fa-user"></i>
            <span>${product.rating.count}</span>
        </div>
        </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashButton.style.display = "none";
  }

  const allProducts = await getData("products");
  showProducts(allProducts);
};

document.addEventListener("DOMContentLoaded", init);
