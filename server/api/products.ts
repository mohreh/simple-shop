import products from "../products.json";
export default defineEventHandler(async (event) => {
  return products;
});
