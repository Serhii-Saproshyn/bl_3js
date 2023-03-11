import { apiDummyJson } from "../services/api";
export async function getAllProducts() {
  const products = await apiDummyJson.get("/products");
  return products;
}
export async function getProductById(id) {
  const products = await apiDummyJson.get(`/products/${id}`);
  return products;
}
