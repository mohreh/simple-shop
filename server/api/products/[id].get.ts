import products from "../../products.json";

export default defineEventHandler((event) => {
  return products.find((product) => product.id == event.context.params.id);
});
