import { apiDummyJson } from "../services/api";
export async function getAllProducts() {
  const products = await apiDummyJson.get("/products");
  return products;
}
export async function getProductById(id) {
  const products = await apiDummyJson.get(`/products/${id}`);
  return products;
}

export async function addNewProduct(newProduct) {
  const product = await apiDummyJson.post("/products/add", newProduct);
  return product;
}

export async function deleteProductById(id) {
  const product = await apiDummyJson.delete(`/products/${id}`);
  return product;
}
