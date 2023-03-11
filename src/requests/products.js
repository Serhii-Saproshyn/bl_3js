import { apiDummyJson } from "../services/api";
export async function getAllProducts() {
  const products = await apiDummyJson.get("/products");
  return products;
}
