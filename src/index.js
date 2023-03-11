import "./styles/normalize.css";
import "./styles/index.css";
import {
  getAllProducts,
  getProductById,
  addNewProduct,
  deleteProductById,
} from "./requests/products";

// Задача 1.
// Создай функцию для получения информации обо всех продуктах с последующим рендером списка.

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
  listProductsRef.innerHTML = markup;
});

// Задача 2.
// Реализуй поиск и рендер информации о продукте по его ID.

const singleProductFormRef = document.querySelector("#singleProductForm");
const singleProductRef = document.querySelector("#singleProduct");
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

// Задача 3.
// Создай и отрендери новый продукт.

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

// Задача 4.
// Удалите продукт по его ID.
// Если успешно, выведите через alert SUCCESS и инфо
// об удаленном продукте, в противном случае выведите ERROR и причину ошибки.

const deletionProductForRefs = document.querySelector("#deletionProductForm");

deletionProductForRefs.addEventListener("submit", onDeleteProductFormSubmit);

async function onDeleteProductFormSubmit(e) {
  e.preventDefault();
  const idValue = e.target.elements.deletionId.value;

  try {
    const {
      data: { title: deleteProductTitle },
    } = await deleteProductById(idValue);
    alert(`${deleteProductTitle} is deleted `);
  } catch ({ response: { status } }) {
    if (status === 404) {
      return alert("This product is not exist");
    }
    alert("Input another id");
  }
}
