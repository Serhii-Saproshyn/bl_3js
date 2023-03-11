import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductById } from "./requests/products";

const singleProductFormRef = document.querySelector("#singleProductForm");
const singleProductRef = document.querySelector("#singleProduct");

// const listProductsRef = document.querySelector("#allProducts");
// getAllProducts().then(({ data: { products } }) => {
//   const markup = products
//     .map(({ title, description, price, images }) => {
//       return ` <li>
//       <h3>${title}</h3>
//       <p>${description}</p>
//       <p>Price:${price}$</p>
//       <img width="150" height="100" src='${images[0]}'>
//     </li>`;
//     })
//     .join("");
//   console.log(markup);
//   listProductsRef.innerHTML = markup;
// });

singleProductFormRef.addEventListener("submit", onSingleProductFormSubmit);

async function onSingleProductFormSubmit(e) {
  e.preventDefault();
  const idValue = e.target.elements.id.value;
  const {
    data: { title, description, price, images },
  } = await getProductById(idValue);

  const markup = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Price:${price}$</p>
      <img width="150" height="100" src='${images[0]}'>
    `;

  singleProductRef.innerHTML = markup;
}
