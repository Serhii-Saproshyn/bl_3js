import "./styles/normalize.css";
import "./styles/index.css";
import {
  getAllProducts,
  getProductById,
  addNewProduct,
} from "./requests/products";

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

// singleProductFormRef.addEventListener("submit", onSingleProductFormSubmit);

// async function onSingleProductFormSubmit(e) {
//   e.preventDefault();
//   const idValue = e.target.elements.id.value;
//   const {
//     data: { title, description, price, images },
//   } = await getProductById(idValue);

//   const markup = `
//       <h3>${title}</h3>
//       <p>${description}</p>
//       <p>Price:${price}$</p>
//       <img width="150" height="100" src='${images[0]}'>
//     `;

//   singleProductRef.innerHTML = markup;
// }

const refs = {
  form: document.querySelector("#newProductForm"),
  newProduct: document.querySelector("#newProductSection"),
};

refs.form.addEventListener("submit", onNewProductFormSubmit);

async function onNewProductFormSubmit(e) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const price = e.target.elements.price.value;
  const description = e.target.elements.description.value;
  const {
    data: {
      title: newProductTitle,
      description: newProductDescription,
      price: newProductPrice,
      id: newProductId,
    },
  } = await addNewProduct({ title, price, description });
  const markup = `
       <h3>${newProductTitle}</h3>
       <p>${newProductDescription}</p>
       <p>Price:${newProductPrice}$</p>
       <p>${newProductId}</p>
     `;

  refs.newProduct.innerHTML = markup;
}
