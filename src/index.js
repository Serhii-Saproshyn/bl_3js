import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
const listProductsRef = document.querySelector("#allProducts");
getAllProducts().then(({ data: { products } }) => {
  const markup = products
    .map(({ title, description, price, images }) => {
      return ` <li>
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Price:${price}$</p>
      <img width="150" height="100" src='${images[0]}'>
    </li>`;
    })
    .join("");
  console.log(markup);
  listProductsRef.innerHTML = markup;
});
