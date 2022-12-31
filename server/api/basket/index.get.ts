export default defineEventHandler(async (event) => {
  const basket = JSON.parse(getCookie(event, "basket") || "{}");

  const items = [];
  let totalPrice = 0;

  for (const id in basket) {
    const product = await $fetch(`/api/products/${id}`);

    product.quantity = basket[id];
    product.price = product.quantity * product.price;

    totalPrice += product.price;
    items.push(product);
  }

  await useStorage().setItem("basket:totalPrice", totalPrice);

  return {
    items,
    totalPrice,
  };
});
