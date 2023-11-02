import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import shortenText from "./utils/stringFunction.js";

let allProducts = null;
let search = "";
let category = "all";

const loginButton = document.querySelector("#login");
const dashButton = document.querySelector("#dashboard");
const mainContent = document.querySelector("#products");
const searchButton = document.querySelector("button");
const searchInput = document.querySelector("input");
const listItems = document.querySelectorAll("li");

const renderProducts = (products) => {
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

  allProducts = await getData("products");
  renderProducts(allProducts);
};

const filterProducts = () => {
  const filteredProducts = allProducts.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(search);
    } else {
      return (
        product.title.toLowerCase().includes(search) &&
        product.category.toLowerCase() === category
      );
    }
  });

  renderProducts(filteredProducts);
};

const searchHandler = () => {
  search = searchInput.value.trim().toLowerCase();

  filterProducts(search);
};

const filterHandler = (event) => {
  category = event.target.innerText.toLowerCase();

  listItems.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });

  filterProducts(category);
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click", filterHandler));
